import { NgRecipeBookPage } from './app.po';

describe('ng-recipe-book App', function() {
  let page: NgRecipeBookPage;

  beforeEach(() => {
    page = new NgRecipeBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
