import { DomainAuthorPage } from './app.po';

describe('domain-author App', () => {
  let page: DomainAuthorPage;

  beforeEach(() => {
    page = new DomainAuthorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
