import { NsNgDemoLibPage } from './app.po';

describe('ns-ng-demo-lib App', () => {
  let page: NsNgDemoLibPage;

  beforeEach(() => {
    page = new NsNgDemoLibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('demo works!');
  });
});
