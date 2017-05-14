import { browser, element, by } from 'protractor';
import {AfterViewInit, asNativeElements} from "@angular/core";

export class FrondEndPage {
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
  getFirstNameElement(){
    return browser.driver.findElement(by.name('Name'));
  }
  getSecondNameElement(){
    return browser.driver.findElement(by.name('SecondName'));
  }
  getUsernameElement(){
   return browser.driver.findElement(by.name('username'));
  }
  getEmailElement(){
   return browser.driver.findElement(by.name('Email'));
  }
  getPasswordElement(){
    return browser.driver.findElement(by.name('Password'));
  }
  getConfirmPasswordElement(){
    return browser.driver.findElement(by.name('ConfirmPassword'));
  }
  getInputELements(){
    return browser.driver.findElement(by.css('input[type = "text"],input[type = "email"],input[type = "password"]'));
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
