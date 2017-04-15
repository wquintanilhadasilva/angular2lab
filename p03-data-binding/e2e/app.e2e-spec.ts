import { P03DataBindingPage } from './app.po';

describe('p03-data-binding App', function() {
  let page: P03DataBindingPage;

  beforeEach(() => {
    page = new P03DataBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
