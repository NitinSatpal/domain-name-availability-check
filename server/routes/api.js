const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = 'mongodb://localhost/whois';
const Prefix = require('../models/prefix.js');
const Suffix = require('../models/suffix.js');
const moreExtension = require('../models/moreExtension');
const SmartExtension = require('../models/smartExtension.js');
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const mailgun = {
	auth: {
	  	api_key: 'key-95dd77e3897a2e0363065651dda55231',
	  	domain : 'sandboxb5702d3785744ace96b2ecea380cf47d.mailgun.org'
	}
}
const nodemailerMailgun = nodemailer.createTransport(mg(mailgun));
const options = {
    client_id: '2s83KacM3j_UnVuUueLDwYqrR9eyKRYGk',
    client_secret: 'UnVx412aBLnmuRCfTHKxKn'
  };
const godaddy = require('godaddy')(options);

mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
    if (err) {
    	console.log(err);
    } else {
    	console.log('mongodb connected');
    }

  });



router.get('/', function (req, res) {
	res.send('');
});

router.get('/prefix', function (req, res) {
	Prefix.find({}).exec(function (err, prefixes) {
		if (err) {
			console.log(err);
		} else {
			res.json(prefixes);
		}
	});
});

router.get('/suffix', function (req, res) {
	Suffix.find({}).exec(function (err, prefixes) {
		if (err) {
			console.log(err);
		} else {
			res.json(prefixes);
		}
	});
});

router.get('/moreextensions', function (req, res) {
	moreExtension.find({}).exec(function (err, moreExtensions) {
		if (err) {
			console.log(err);
		} else {
			res.json(moreExtensions);
		}
	});
});

router.post('/send/email', function (req, res) {
	console.log(JSON.stringify(req.body));
	var fromName = "";
	if (req.body.from)
		fromName = req.body.from;
	else
		fromName = 'Some User';

	var fromEmail = req.body.fromEmail;
	var replyTo = req.body.fromEmail;
	var message = req.body.message;
	nodemailerMailgun.sendMail({
        from: fromName + '<'+ fromEmail + '>',
        to: 'contact.lexevo@gmail.com', // An array if you have multiple recipients.
            //cc:'',
            //bcc:'',
            subject: 'Mail from Domain-Author user',
            'h:Reply-To': replyTo,
            //You can use "html:" to send HTML email content. It's magic!
            //html: emailHTML,
            //You can use "text:" to send plain-text content. It's oldschool!
            text: message
          }, function (err, info) {
            if (err) {
            	console.log(err);
              	res.status(400).json('mail could not be sent');
            } else {
            	res.status(200).json('mail sent successfully');
            }
          });
});

// compare function
function compare(a,b) {
	if(a.available===b.available)
		return 0;
	else if(a.available)
		return -1;
	else
		return 1;
}


router.post('/website/domain/check', function (req, res) {
	var websiteDomainCheckList = [];
	var extensions = [];
	var smartExtensions = [];
	var isHypenPresent = false;
	var areSmartExtensionsPresent = false;
	var searchDomain = req.body.keyword;
	searchDomain = searchDomain.charAt(0).toUpperCase() + searchDomain.slice(1);
	for(var index = 0; index < req.body.extensions.length;index++) {
		if(req.body.extensions[index].value == true) {
			extensions.push(req.body.extensions[index].name);
			var domain = '';
			domain = searchDomain + req.body.extensions[index].name;
			websiteDomainCheckList.push(domain);
		}
	}

	for(var index = 0; index < req.body.moreExtensions.length;index++) {
		if(req.body.moreExtensions[index].value == true) {
			extensions.push(req.body.moreExtensions[index].name);
			var domain = '';
			domain = searchDomain + req.body.moreExtensions[index].name;
			websiteDomainCheckList.push(domain);
		}
	}


	if (req.body.hypens == 'yes')
		isHypenPresent = true;


	if (req.body.smartExtensions == 'yes')
		areSmartExtensionsPresent = true;


	SmartExtension.find({}).exec(function (err, smartExtensions) {
		if (err) {
			console.log(err);
		} else {
			smartExtensions = smartExtensions[0];
			Prefix.find({}).exec(function (err, prefixes) {
				if (err) {
					console.log(err);
				} else {
					handleCommonPrefix(prefixes[0].website, searchDomain, extensions, websiteDomainCheckList, isHypenPresent, smartExtensions.website, areSmartExtensionsPresent);

					Suffix.find({}).exec(function (err, suffixes) {
						if (err) {
							console.log(err);
						} else {
							handleCommonSuffix(suffixes[0].website, searchDomain, extensions, websiteDomainCheckList, isHypenPresent);
							// we will check domain availability here.
							godaddy.domains.bulkAvailable({domains: websiteDomainCheckList.splice(0,100)},function (err, websites) {
								if(err){
								    console.log(err);
								} else {
									var data = {};
									var website = websites.domains;
									website.sort(compare);
									data['website'] = website;
									data['websiteTotal'] =websiteDomainCheckList; 
									res.status(200).json(data);
								}
							});
						}
					});
				}
			});
		}
	});
});


router.post('/business/domain/check', function (req, res) {
	var businessDomainCheckList = [];
	var extensions = [];
	var smartExtensions = [];
	var isHypenPresent = false;
	var areSmartExtensionsPresent = false;
	var searchDomain = req.body.keyword;
	searchDomain = searchDomain.charAt(0).toUpperCase() + searchDomain.slice(1);
	for(var index = 0; index < req.body.extensions.length;index++) {
		if(req.body.extensions[index].value == true) {
			extensions.push(req.body.extensions[index].name);
		}
	}

	for(var index = 0; index < req.body.moreExtensions.length;index++) {
		if(req.body.moreExtensions[index].value == true) {
			extensions.push(req.body.moreExtensions[index].name);
		}
	}

	if (req.body.hypens == 'yes')
		isHypenPresent = true;


	if (req.body.smartExtensions == 'yes')
		areSmartExtensionsPresent = true;


	SmartExtension.find({}).exec(function (err, smartExtensions) {
		if (err) {
			console.log(err);
		} else {
			smartExtensions = smartExtensions[0];
			Prefix.find({}).exec(function (err, prefixes) {
				if (err) {
					console.log(err);
				} else {
					handleCommonPrefix(prefixes[0].business, searchDomain, extensions, businessDomainCheckList, isHypenPresent, smartExtensions.business, areSmartExtensionsPresent);

					Suffix.find({}).exec(function (err, suffixes) {
						if (err) {
							console.log(err);
						} else {
							handleCommonSuffix(suffixes[0].business, searchDomain, extensions, businessDomainCheckList, isHypenPresent);
							// we will check domain availability here.
							godaddy.domains.bulkAvailable({domains: businessDomainCheckList.splice(0,100)},function (err, businesses) {
								if(err){
								    console.log(err);
								} else {
									var data = {};
									var business = businesses.domains;
									business.sort(compare);
									data['business'] = business;
									data['businessTotal'] = businessDomainCheckList;
									res.status(200).json(data);
								}
							});
						}
					});
				}
			});
		}
	});
});

router.post('/shop/domain/check', function (req, res) {
	var shopDomainCheckList = [];
	var extensions = [];
	var smartExtensions = [];
	var isHypenPresent = false;
	var areSmartExtensionsPresent = false;
	var searchDomain = req.body.keyword;
	searchDomain = searchDomain.charAt(0).toUpperCase() + searchDomain.slice(1);
	for(var index = 0; index < req.body.extensions.length;index++) {
		if(req.body.extensions[index].value == true) {
			extensions.push(req.body.extensions[index].name);
		}
	}

	for(var index = 0; index < req.body.moreExtensions.length;index++) {
		if(req.body.moreExtensions[index].value == true) {
			extensions.push(req.body.moreExtensions[index].name);
		}
	}

	if (req.body.hypens == 'yes')
		isHypenPresent = true;


	if (req.body.smartExtensions == 'yes')
		areSmartExtensionsPresent = true;


	SmartExtension.find({}).exec(function (err, smartExtensions) {
		if (err) {
			console.log(err);
		} else {
			smartExtensions = smartExtensions[0];
			Prefix.find({}).exec(function (err, prefixes) {
				if (err) {
					console.log(err);
				} else {
					handleCommonPrefix(prefixes[0].shop, searchDomain, extensions, shopDomainCheckList, isHypenPresent, smartExtensions.shop, areSmartExtensionsPresent);

					Suffix.find({}).exec(function (err, suffixes) {
						if (err) {
							console.log(err);
						} else {
							handleCommonSuffix(suffixes[0].shop, searchDomain, extensions, shopDomainCheckList, isHypenPresent);
							// we will check domain availability here.
							godaddy.domains.bulkAvailable({domains: shopDomainCheckList.splice(0,100)},function (err, shops) {
								if(err){
								    console.log(err);
								} else {
									var data = {};
									var shop = shops.domains;
									shop.sort(compare);
									data['shop'] = shop;
									data['shopTotal'] = shopDomainCheckList;
									res.status(200).json(data);
								}
							});
						}
					});
				}
			});
		}
	});
});

router.post('/software/domain/check', function (req, res) {
	var softwareDomainCheckList = [];
	var extensions = [];
	var smartExtensions = [];
	var isHypenPresent = false;
	var areSmartExtensionsPresent = false;
	var searchDomain = req.body.keyword;
	searchDomain = searchDomain.charAt(0).toUpperCase() + searchDomain.slice(1);
	for(var index = 0; index < req.body.extensions.length;index++) {
		if(req.body.extensions[index].value == true) {
			extensions.push(req.body.extensions[index].name);
		}
	}

	for(var index = 0; index < req.body.moreExtensions.length;index++) {
		if(req.body.moreExtensions[index].value == true) {
			extensions.push(req.body.moreExtensions[index].name);
		}
	}

	if (req.body.hypens == 'yes')
		isHypenPresent = true;


	if (req.body.smartExtensions == 'yes')
		areSmartExtensionsPresent = true;


	SmartExtension.find({}).exec(function (err, smartExtensions) {
		if (err) {
			console.log(err);
		} else {
			smartExtensions = smartExtensions[0];
			Prefix.find({}).exec(function (err, prefixes) {
				if (err) {
					console.log(err);
				} else {
					handleCommonPrefix(prefixes[0].software, searchDomain, extensions, softwareDomainCheckList, isHypenPresent, smartExtensions.software, areSmartExtensionsPresent);

					Suffix.find({}).exec(function (err, suffixes) {
						if (err) {
							console.log(err);
						} else {
							handleCommonSuffix(suffixes[0].software, searchDomain, extensions, softwareDomainCheckList, isHypenPresent);
							// we will check domain availability here.
							godaddy.domains.bulkAvailable({domains: softwareDomainCheckList.splice(0,100)},function (err, softwares) {
								if(err){
								    console.log(err);
								} else {
									var data = {};
									var software = softwares.domains;
									software.sort(compare);
									data['software'] = software;
									data['softwareTotal'] = softwareDomainCheckList;
									res.status(200).json(data);
								}
							});
						}
					});
				}
			});
		}
	});
});

router.post('/app/domain/check', function (req, res) {
	var appDomainCheckList = [];
	var extensions = [];
	var smartExtensions = [];
	var isHypenPresent = false;
	var areSmartExtensionsPresent = false;
	var searchDomain = req.body.keyword;
	searchDomain = searchDomain.charAt(0).toUpperCase() + searchDomain.slice(1);
	for(var index = 0; index < req.body.extensions.length;index++) {
		if(req.body.extensions[index].value == true) {
			extensions.push(req.body.extensions[index].name);
		}
	}

	for(var index = 0; index < req.body.moreExtensions.length;index++) {
		if(req.body.moreExtensions[index].value == true) {
			extensions.push(req.body.moreExtensions[index].name);
		}
	}

	if (req.body.hypens == 'yes')
		isHypenPresent = true;


	if (req.body.smartExtensions == 'yes')
		areSmartExtensionsPresent = true;


	SmartExtension.find({}).exec(function (err, smartExtensions) {
		if (err) {
			console.log(err);
		} else {
			smartExtensions = smartExtensions[0];
			Prefix.find({}).exec(function (err, prefixes) {
				if (err) {
					console.log(err);
				} else {
					handleCommonPrefix(prefixes[0].app, searchDomain, extensions, appDomainCheckList, isHypenPresent, smartExtensions.app, areSmartExtensionsPresent);

					Suffix.find({}).exec(function (err, suffixes) {
						if (err) {
							console.log(err);
						} else {
							handleCommonSuffix(suffixes[0].app, searchDomain, extensions, appDomainCheckList, isHypenPresent);
							// we will check domain availability here.
							godaddy.domains.bulkAvailable({domains: appDomainCheckList.splice(0,100)},function (err, apps) {
								if(err){
								    console.log(err);
								} else {
									var data = {};
									var app = apps.domains;
									app.sort(compare);
									data['app'] = app;
									data['appTotal'] = appDomainCheckList;
									res.status(200).json(data);
								}
							});
						}
					});
				}
			});
		}
	});
});

router.post('/ebook/domain/check', function (req, res) {
	var eBookDomainCheckList = [];
	var extensions = [];
	var smartExtensions = [];
	var isHypenPresent = false;
	var areSmartExtensionsPresent = false;
	var searchDomain = req.body.keyword;
	searchDomain = searchDomain.charAt(0).toUpperCase() + searchDomain.slice(1);
	for(var index = 0; index < req.body.extensions.length;index++) {
		if(req.body.extensions[index].value == true) {
			extensions.push(req.body.extensions[index].name);
		}
	}

	for(var index = 0; index < req.body.moreExtensions.length;index++) {
		if(req.body.moreExtensions[index].value == true) {
			extensions.push(req.body.moreExtensions[index].name);
		}
	}

	if (req.body.hypens == 'yes')
		isHypenPresent = true;


	if (req.body.smartExtensions == 'yes')
		areSmartExtensionsPresent = true;


	SmartExtension.find({}).exec(function (err, smartExtensions) {
		if (err) {
			console.log(err);
		} else {
			smartExtensions = smartExtensions[0];
			Prefix.find({}).exec(function (err, prefixes) {
				if (err) {
					console.log(err);
				} else {
					handleCommonPrefix(prefixes[0].eBook, searchDomain, extensions, eBookDomainCheckList, isHypenPresent, smartExtensions.eBook, areSmartExtensionsPresent);

					Suffix.find({}).exec(function (err, suffixes) {
						if (err) {
							console.log(err);
						} else {
							handleCommonSuffix(suffixes[0].eBook, searchDomain, extensions, eBookDomainCheckList, isHypenPresent);
							// we will check domain availability here.
							godaddy.domains.bulkAvailable({domains: eBookDomainCheckList.splice(0,100)},function (err, eBooks) {
								if(err){
								    console.log(err);
								} else {
									var data = {};
									var eBook = eBooks.domains;
									eBook.sort(compare);
									data['eBook'] = eBook;
									data['eBookTotal'] = eBookDomainCheckList;
									res.status(200).json(data);
								}
							});
						}
					});
				}
			});
		}
	});
});

router.post('/affiliate/domain/check', function (req, res) {
	var affiliateDomainCheckList = [];
	var extensions = [];
	var smartExtensions = [];
	var isHypenPresent = false;
	var areSmartExtensionsPresent = false;
	var searchDomain = req.body.keyword;
	searchDomain = searchDomain.charAt(0).toUpperCase() + searchDomain.slice(1);
	for(var index = 0; index < req.body.extensions.length;index++) {
		if(req.body.extensions[index].value == true) {
			extensions.push(req.body.extensions[index].name);
		}
	}

	for(var index = 0; index < req.body.moreExtensions.length;index++) {
		if(req.body.moreExtensions[index].value == true) {
			extensions.push(req.body.moreExtensions[index].name);
		}
	}

	if (req.body.hypens == 'yes')
		isHypenPresent = true;


	if (req.body.smartExtensions == 'yes')
		areSmartExtensionsPresent = true;


	SmartExtension.find({}).exec(function (err, smartExtensions) {
		if (err) {
			console.log(err);
		} else {
			smartExtensions = smartExtensions[0];
			Prefix.find({}).exec(function (err, prefixes) {
				if (err) {
					console.log(err);
				} else {
					handleCommonPrefix(prefixes[0].affiliate, searchDomain, extensions, affiliateDomainCheckList, isHypenPresent, smartExtensions.affiliate, areSmartExtensionsPresent);

					Suffix.find({}).exec(function (err, suffixes) {
						if (err) {
							console.log(err);
						} else {
							handleCommonSuffix(suffixes[0].affiliate, searchDomain, extensions, affiliateDomainCheckList, isHypenPresent);
							// we will check domain availability here.
							godaddy.domains.bulkAvailable({domains: affiliateDomainCheckList.splice(0,100)},function (err, affiliates) {
								if(err){
								    console.log(err);
								} else {
									var data = {};
									var affiliate = affiliates.domains;
									affiliate.sort(compare)
									data['affiliate'] = affiliate;
									data['affiliateTotal'] = affiliateDomainCheckList;
									res.status(200).json(data);
								}
							});
						}
					});
				}
			});
		}
	});
});

router.post('/community/domain/check', function (req, res) {
	var communityDomainCheckList = [];
	var extensions = [];
	var smartExtensions = [];
	var isHypenPresent = false;
	var areSmartExtensionsPresent = false;
	var searchDomain = req.body.keyword;
	searchDomain = searchDomain.charAt(0).toUpperCase() + searchDomain.slice(1);
	for(var index = 0; index < req.body.extensions.length;index++) {
		if(req.body.extensions[index].value == true) {
			extensions.push(req.body.extensions[index].name);
		}
	}

	for(var index = 0; index < req.body.moreExtensions.length;index++) {
		if(req.body.moreExtensions[index].value == true) {
			extensions.push(req.body.moreExtensions[index].name);
		}
	}

	if (req.body.hypens == 'yes')
		isHypenPresent = true;


	if (req.body.smartExtensions == 'yes')
		areSmartExtensionsPresent = true;


	SmartExtension.find({}).exec(function (err, smartExtensions) {
		if (err) {
			console.log(err);
		} else {
			smartExtensions = smartExtensions[0];
			Prefix.find({}).exec(function (err, prefixes) {
				if (err) {
					console.log(err);
				} else {
					handleCommonPrefix(prefixes[0].community, searchDomain, extensions, communityDomainCheckList, isHypenPresent, smartExtensions.community, areSmartExtensionsPresent);

					Suffix.find({}).exec(function (err, suffixes) {
						if (err) {
							console.log(err);
						} else {
							handleCommonSuffix(suffixes[0].community, searchDomain, extensions, communityDomainCheckList, isHypenPresent);
							// we will check domain availability here.
							godaddy.domains.bulkAvailable({domains: communityDomainCheckList.splice(0,100)},function (err, communities) {
								if(err){
								    console.log(err);
								} else {
									var data = {};
									var community = communities.domains;
									community.sort(compare);
									data['community'] = community;
									data['communityTotal'] = communityDomainCheckList;
									res.status(200).json(data);
								}
							});
						}
					});
				}
			});
		}
	});
});

router.post('/training/domain/check', function (req, res) {
	var trainingDomainCheckList = [];
	var extensions = [];
	var smartExtensions = [];
	var isHypenPresent = false;
	var areSmartExtensionsPresent = false;
	var searchDomain = req.body.keyword;
	searchDomain = searchDomain.charAt(0).toUpperCase() + searchDomain.slice(1);
	for(var index = 0; index < req.body.extensions.length;index++) {
		if(req.body.extensions[index].value == true) {
			extensions.push(req.body.extensions[index].name);
		}
	}

	for(var index = 0; index < req.body.moreExtensions.length;index++) {
		if(req.body.moreExtensions[index].value == true) {
			extensions.push(req.body.moreExtensions[index].name);
		}
	}

	if (req.body.hypens == 'yes')
		isHypenPresent = true;


	if (req.body.smartExtensions == 'yes')
		areSmartExtensionsPresent = true;


	SmartExtension.find({}).exec(function (err, smartExtensions) {
		if (err) {
			console.log(err);
		} else {
			smartExtensions = smartExtensions[0];
			Prefix.find({}).exec(function (err, prefixes) {
				if (err) {
					console.log(err);
				} else {
					handleCommonPrefix(prefixes[0].training, searchDomain, extensions, trainingDomainCheckList, isHypenPresent, smartExtensions.training, areSmartExtensionsPresent);

					Suffix.find({}).exec(function (err, suffixes) {
						if (err) {
							console.log(err);
						} else {
							handleCommonSuffix(suffixes[0].training, searchDomain, extensions, trainingDomainCheckList, isHypenPresent);
							// we will check domain availability here.
							godaddy.domains.bulkAvailable({domains: trainingDomainCheckList.splice(0,100)},function (err, trainings) {
								if(err){
								    console.log(err);
								} else {
									var data = {};
									var training = trainings.domains;
									training.sort(compare);
									data['training'] = training;
									data['trainingTotal'] = trainingDomainCheckList;
									res.status(200).json(data);
								}
							});
						}
					});
				}
			});
		}
	});
});

router.post('/news/domain/check', function (req, res) {
	var newsDomainCheckList = [];
	var extensions = [];
	var smartExtensions = [];
	var isHypenPresent = false;
	var areSmartExtensionsPresent = false;
	var searchDomain = req.body.keyword;
	searchDomain = searchDomain.charAt(0).toUpperCase() + searchDomain.slice(1);
	for(var index = 0; index < req.body.extensions.length;index++) {
		if(req.body.extensions[index].value == true) {
			extensions.push(req.body.extensions[index].name);
		}
	}

	for(var index = 0; index < req.body.moreExtensions.length;index++) {
		if(req.body.moreExtensions[index].value == true) {
			extensions.push(req.body.moreExtensions[index].name);
		}
	}

	if (req.body.hypens == 'yes')
		isHypenPresent = true;


	if (req.body.smartExtensions == 'yes')
		areSmartExtensionsPresent = true;


	SmartExtension.find({}).exec(function (err, smartExtensions) {
		if (err) {
			console.log(err);
		} else {
			smartExtensions = smartExtensions[0];
			Prefix.find({}).exec(function (err, prefixes) {
				if (err) {
					console.log(err);
				} else {
					handleCommonPrefix(prefixes[0].news, searchDomain, extensions, newsDomainCheckList, isHypenPresent, smartExtensions.news, areSmartExtensionsPresent);

					Suffix.find({}).exec(function (err, suffixes) {
						if (err) {
							console.log(err);
						} else {
							handleCommonSuffix(suffixes[0].news, searchDomain, extensions, newsDomainCheckList, isHypenPresent);
							// we will check domain availability here.
							godaddy.domains.bulkAvailable({domains: newsDomainCheckList.splice(0,100)},function (err, news) {
								if(err){
								    console.log(err);
								} else {
									var data = {};
									var theNews = news.domains;
									theNews.sort(compare);
									data['news'] = theNews;
									data['newsTotal'] = newsDomainCheckList;
									res.status(200).json(data);
								}
							});
						}
					});
				}
			});
		}
	});
});

router.post('/marketplace/domain/check', function (req, res) {
	var marketplaceDomainCheckList = [];
	var extensions = [];
	var smartExtensions = [];
	var isHypenPresent = false;
	var areSmartExtensionsPresent = false;
	var searchDomain = req.body.keyword;
	searchDomain = searchDomain.charAt(0).toUpperCase() + searchDomain.slice(1);
	for(var index = 0; index < req.body.extensions.length;index++) {
		if(req.body.extensions[index].value == true) {
			extensions.push(req.body.extensions[index].name);			
		}
	}

	for(var index = 0; index < req.body.moreExtensions.length;index++) {
		if(req.body.moreExtensions[index].value == true) {
			extensions.push(req.body.moreExtensions[index].name);
		}
	}

	if (req.body.hypens == 'yes')
		isHypenPresent = true;


	if (req.body.smartExtensions == 'yes')
		areSmartExtensionsPresent = true;


	SmartExtension.find({}).exec(function (err, smartExtensions) {
		if (err) {
			console.log(err);
		} else {
			smartExtensions = smartExtensions[0];
			Prefix.find({}).exec(function (err, prefixes) {
				if (err) {
					console.log(err);
				} else {
					handleCommonPrefix(prefixes[0].marketplace, searchDomain, extensions, marketplaceDomainCheckList, isHypenPresent, smartExtensions.marketplace, areSmartExtensionsPresent);

					Suffix.find({}).exec(function (err, suffixes) {
						if (err) {
							console.log(err);
						} else {
							handleCommonSuffix(suffixes[0].marketplace, searchDomain, extensions, marketplaceDomainCheckList, isHypenPresent);
							// we will check domain availability here.
							godaddy.domains.bulkAvailable({domains: marketplaceDomainCheckList.splice(0,100)},function (err, marketplaces) {
								if(err){
								    console.log(err);
								} else {									
									var data = {};
									var marketplace = marketplaces.domains;
									marketplace.sort(compare);
									data['marketplace'] = marketplace;
									data['marketplaceTotal'] = marketplaceDomainCheckList;
									res.status(200).json(data);	
								}
							});
						}
					});
				}
			});
		}
	});
});

router.post('/video/domain/check', function (req, res) {
	var videoDomaincheckList = [];
	var extensions = [];
	var smartExtensions = [];
	var isHypenPresent = false;
	var areSmartExtensionsPresent = false;
	var searchDomain = req.body.keyword;
	searchDomain = searchDomain.charAt(0).toUpperCase() + searchDomain.slice(1);
	for(var index = 0; index < req.body.extensions.length;index++) {
		if(req.body.extensions[index].value == true) {
			extensions.push(req.body.extensions[index].name);
		}
	}

	for(var index = 0; index < req.body.moreExtensions.length;index++) {
		if(req.body.moreExtensions[index].value == true) {
			extensions.push(req.body.moreExtensions[index].name);
		}
	}

	if (req.body.hypens == 'yes')
		isHypenPresent = true;


	if (req.body.smartExtensions == 'yes')
		areSmartExtensionsPresent = true;


	SmartExtension.find({}).exec(function (err, smartExtensions) {
		if (err) {
			console.log(err);
		} else {
			smartExtensions = smartExtensions[0];
			Prefix.find({}).exec(function (err, prefixes) {
				if (err) {
					console.log(err);
				} else {
					handleCommonPrefix(prefixes[0].video, searchDomain, extensions, videoDomaincheckList, isHypenPresent, smartExtensions.video, areSmartExtensionsPresent);

					Suffix.find({}).exec(function (err, suffixes) {
						if (err) {
							console.log(err);
						} else {
							handleCommonSuffix(suffixes[0].video, searchDomain, extensions, videoDomaincheckList, isHypenPresent);
							// we will check domain availability here.
							godaddy.domains.bulkAvailable({domains: videoDomaincheckList.splice(0,100)},function (err, videos) {
								if(err){
								    console.log(err);
								} else {
									var data = {};
									var video = videos.domains;
									video.sort(compare);
									data['video'] = video;
									data['videoTotal'] = videoDomaincheckList;
									res.status(200).json(data);	
								}
							});
						}
					});
				}
			});
		}
	});
});

function handleCommonPrefix(commonPrefixes, domain, extensions, commonDomainCheckList, isHypenPresent, smartExtensions, areSmartExtensionsPresent) {
	for (var outerIndex = 0; outerIndex < extensions.length; outerIndex++) {
		for (var innerIndex = 0; innerIndex < commonPrefixes.length; innerIndex++) {
			var searchDomain = '';
			searchDomain = commonPrefixes[innerIndex] + domain + extensions[outerIndex];
			commonDomainCheckList.push(searchDomain);
			if (isHypenPresent) {
				var hypenDomain = '';
				hypenDomain = commonPrefixes[innerIndex] + '-' + domain + extensions[outerIndex];
				commonDomainCheckList.push(hypenDomain);
			}
		}
	}
	if (areSmartExtensionsPresent) {
		for (var smartExtensionIndex = 0; smartExtensionIndex < smartExtensions.length; smartExtensionIndex ++) {
			var smartExtentionDomain = '';
			smartExtentionDomain = domain + smartExtensions[smartExtensionIndex];
			commonDomainCheckList.push(smartExtentionDomain);
		}
	}
}

function handleCommonSuffix(commonSuffix, domain, extensions, commonDomainCheckList, isHypenPresent) {
	for (var outerIndex = 0; outerIndex < extensions.length; outerIndex++) {
		for (var innerIndex = 0; innerIndex < commonSuffix.length; innerIndex++) {
			var searchDomain = '';
			searchDomain = domain + commonSuffix[innerIndex] + extensions[outerIndex];
			commonDomainCheckList.push(searchDomain);
			if (isHypenPresent) {
				var hypenDomain = '';
				hypenDomain = domain + '-' + commonSuffix[innerIndex] + extensions[outerIndex];
				commonDomainCheckList.push(hypenDomain);
			}
		}
	}
}

router.post('/remaining/domain/check', function (req, res) {
	var softwareDomainCheckList = req.body.remainingList;
	var returnList = [];
	if (req.body.remainingList.length > 0) {
		var totalCalls = Math.ceil(softwareDomainCheckList.length / 500);
		var counter = 0;
		while (softwareDomainCheckList.length > 0) {
			godaddy.domains.bulkAvailable({domains: softwareDomainCheckList.splice(0,500)},function (err, result) {
				if(err){
				    console.log(err);
				    if (counter == totalCalls)
						res.status(200).json(returnList);
				} else {
					returnList = returnList.concat(result.domains);
					counter++;
					if (counter == totalCalls)
						res.json(returnList);	
				}
			});
		}
	} else {
		var emptyResult = [];
		res.json(emptyResult);
	}

})


module.exports = router;