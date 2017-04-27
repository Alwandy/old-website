import { AlwandyPage } from './app.po';

describe('alwandy App', () => {
  let page: AlwandyPage;

  beforeEach(() => {
    page = new AlwandyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
