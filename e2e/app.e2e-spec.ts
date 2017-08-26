import { CadetNg2Page } from './app.po';

describe('cadet-ng2 App', () => {
  let page: CadetNg2Page;

  beforeEach(() => {
    page = new CadetNg2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
