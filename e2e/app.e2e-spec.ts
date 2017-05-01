import { CatchOfTheDayAppPage } from './app.po';

describe('catch-of-the-day App', () => {
  let page: CatchOfTheDayAppPage;

  beforeEach(() => {
    page = new CatchOfTheDayAppPage();
  });

  it('should display the app heading', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Catch of the Day');
  });
});
