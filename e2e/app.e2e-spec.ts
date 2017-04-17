import { RockmeliaRSVPPage } from './app.po';

describe('rockmelia-rsvp App', () => {
  let page: RockmeliaRSVPPage;

  beforeEach(() => {
    page = new RockmeliaRSVPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
