import { LibraPage } from './app.po';

describe('libra App', () => {
  let page: LibraPage;

  beforeEach(() => {
    page = new LibraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
