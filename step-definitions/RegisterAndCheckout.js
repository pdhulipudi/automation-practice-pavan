import {Given, When, Then} from '@cucumber/cucumber';
import registerPage from '../pageobjects/registerAndCheckout.page';
import registerData from '../data/testData.json'
var chai = require('chai');
const expect = chai.expect;
var loginMail;
var productName = "Faded Short Sleeve T-shirts";

Given(/^Im on the Home page/, function(){
    registerPage.openHomePage();
    registerPage.clickSignin();
    registerPage.fillEmailAndSubmit();
});

When(/^I click on sign-in and submit/, function(){
    registerPage.clickSignin();
    loginMail = registerPage.fillEmailAndSubmit();
});

Then(/^Im on the home page/, function(){
    expect(registerPage.verifyRegisterPage()).to.be.true;    
});

Then(/^Fill Registration Form/, function(){
    registerPage.selectGender(registerData.register.title);
    registerPage.fillFirstname(registerData.register.firstName);
    registerPage.fillLastname(registerData.register.lastName);
    registerPage.fillPassword(registerData.register.Password);
    registerPage.selectDOBDay(registerData.register.day)
    registerPage.selectDOBMonth(registerData.register.month)
    registerPage.selectDOBYear(registerData.register.year)
    registerPage.fillCompanyName(registerData.register.company);
    registerPage.fillAddress1(registerData.register.address1);
    registerPage.fillCity(registerData.register.city);
    registerPage.fillState(registerData.register.state);
    registerPage.fillZipcode(registerData.register.zipcode);
    registerPage.fillCountry(registerData.register.country);
    registerPage.fillMobile(registerData.register.mobile);
    registerPage.fillAlias(registerData.register.alias);
});

Then(/^Verify Registration and Logout/, function(){
    registerPage.clickRegister();
    browser.pause(5000);
    expect(registerPage.getAccountName()).to.be.equal(registerData.register.firstName +" "+ registerData.register.lastName);
    registerPage.signOut();
});

Then(/^Login and verify/, function(){
    registerPage.signIn(loginMail, registerData.register.Password);
    expect(registerPage.getAccountName()).to.be.equal(registerData.register.firstName +" "+ registerData.register.lastName);
});

When(/^I Enter product name and search, Add to Cart/, function(){
    registerPage.enterProductName(productName);
    registerPage.clickSearch();
    expect(registerPage.verifyProductDisplayed(productName)).to.be.true;
    registerPage.clickOnListView();
    registerPage.addProductToCart();
});
Then(/^Proceed to checkout and verify payments page/, function(){
    
    registerPage.proceedToCheckout();
    registerPage.proceedToCheckoutOnCartSummary();
    registerPage.proceedToCheckoutOnAddress();
    registerPage.clickAgreeTermsofService();
    registerPage.proceedToCheckoutOnShipping();
    expect(registerPage.getProductNameOnPayment()).to.be.equal(productName);


});

