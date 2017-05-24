///<reference path="../node_modules/protractor/built/browser.d.ts"/>
import { FrondEndPage } from './app.po';





describe('frond-end App', () => {
  let page: FrondEndPage;


  beforeEach(() => {
    page = new FrondEndPage();
  });
  describe(' E2E HOME PAGE TEST: ',() => {
    it('should go to home page after reloading', () => {
      page.navigateToHome();
    });
    it('should show the home page Text',() => {
      expect(page.getHomeParagraphText()).toBe('The right cv template will get the attention you need. Impress the recruiter with a creative design to get the interest growing!');
    });
    it('should show the home page Title',() => {
      expect(page.getHomeTitleText()).toBe('Create now your Professional Resume in few minutes');
    });
    it('should show Professional with green color',() => {
      expect(page.getHomeSpanText()).toBe('rgba(51, 51, 51, 1)');
    });
    it('should go to Templates page when click the link Templates ',() => {
      page.getLink().click();
      page.navigateToTemplate();
    });
    it('should go to About page when click the link About',() => {
      page.getLink().click();
      page.navigateToAbout();
    });
    it('should go to Signup page when click the link Signup',() => {
      page.getLink().click();
      page.navigateToSignup();
    });

    it('should go to Login page when click the link Login',() => {
      page.getLink().click();
      page.navigateToLogin();
    });
  });

  describe('E2E SIGNUP TEST : ',() => {
    beforeEach(() => {
      page.navigateToSignup();
    });

    it(' it should get all the  6 input elements ', () => {
      expect(page.getInputELements().count()).toEqual(6);
    });
  });

    describe('E2E LOGIN TEST : ', () => {
      beforeEach(() => {
        page.navigateToLogin();
      });

      it(' it should get all the  2 input elements ', () => {
        expect(page.getInputELements().count()).toEqual(2);
      });
    });
});
