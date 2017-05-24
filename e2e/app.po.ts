import { browser, element, by } from 'protractor';
import {AfterViewInit} from "@angular/core";

export class FrondEndPage {
  constructor(){
    browser.useAllAngular2AppRoots;
  }
  navigateToHome() {
    return browser.get('/home');
  }
  navigateToTemplate(){
    return browser.get('/templates');
  }
  navigateToAbout(){
    return browser.get('/About');
  }
  navigateToSignup(){
    return browser.get('/signup');
  }
  navigateToLogin(){
    return browser.get('/login');
  }

  getHomeParagraphText() {
    return element(by.css('h4')).getText();
  }
  getHomeTitleText(){
    return element(by.css('h3')).getText();
  }
  getHomeSpanText(){
    return element(by.css('span')).getCssValue('color');
  }
  getLink(){
    return element(by.css('a'));
  }

  getInputELements(){
    return element.all(by.css('input[type = "text"],input[type = "email"],input[type = "password"]'));
  }
  getFlashMessage(){
    return element(by.css('flash-messages')).getText()
  }
 getErrorElement(){
    return element(by.css('i')).getText();
 }
 getView(){
   return  AfterViewInit.call;
 }
 getSubmitButton(){
   return element(by.css('input[type="submit"]'))
 }
 getResponseMessage(){
   return element(by.binding('user/signup'))
 }
}
