import { FrondEndPage } from './app.po';

describe('frond-end App', () => {
  let page: FrondEndPage;

  beforeEach(() => {
    page = new FrondEndPage();
  });

  it('should go to home page after reloading', () => {
    page.navigateTo();
  });
});
