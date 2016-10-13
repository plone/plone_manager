import { PloneManagerPage } from './app.po';

describe('plone-manager App', function() {
  let page: PloneManagerPage;

  beforeEach(() => {
    page = new PloneManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
