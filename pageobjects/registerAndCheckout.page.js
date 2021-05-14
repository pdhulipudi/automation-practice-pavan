class RegisterAndCheckout {

    /*** Register WebElements*/

    get signInLink() {
        return browser.$(`.login`);
    }

    get createAccountEmail() {
        return browser.$(`#email_create`);
    }

    get createAccountButton() {
        return browser.$(`#SubmitCreate`);
    }

    get selectTitleMale() {
        return browser.$(`#id_gender1`);
    }

    get selectTitleFemale() {
        return browser.$(`#id_gender2`);
    }

    get firstName() {
        return browser.$(`#customer_firstname`);
    }

    get lastName() {
        return browser.$(`#customer_lastname`);
    }

    get password() {
        return browser.$(`#passwd`);
    }

    get days() {
        return browser.$(`#days`);
    }

    get months() {
        return browser.$(`#months`);
    }

    get years() {
        return browser.$(`#years`);
    }

    get company() {
        return browser.$(`#company`);
    }

    get address1() {
        return browser.$(`#address1`);
    }

    get address2() {
        return browser.$(`#address2`);
    }

    get city() {
        return browser.$(`#city`);
    }

    get state() {
        return browser.$(`#id_state`);
    }

    get zipcode() {
        return browser.$(`#postcode`);
    }

    get country() {
        return browser.$(`#id_country`);
    }

    get mobilePhone() {
        return browser.$(`#phone_mobile`)
    }

    get alias() {
        return browser.$(`#alias`)
    }

    get registerButton() {
        return browser.$(`#submitAccount`)
    }

    get registerPageHeading() {
        return browser.$(`.page-heading`);
    }

    get accountNameAfterRegistration() {
        return browser.$(`.account span`);
    }

    get logoutLink() {
        return browser.$(`.logout`);
    }

    get loginEmail() {
        return browser.$(`#email`);
    }

    get loginPassword() {
        return browser.$(`#passwd`);
    }

    get signInButton() {
        return browser.$(`#SubmitLogin`);
    }

    // Checkout WebElements
    get searchBar() {
        return browser.$(`#search_query_top`);
    }

    get searchButton() {
        return browser.$(`.btn.btn-default.button-search`);
    }

    searchResult(name) {
        return browser.$(".product-name[title='" + name + "']");
    }

    get productImage() {
        return browser.$(`.product-image-container img`);
    }

    get addToCartButton() {
        return browser.$(`.right-block-content.row [title='Add to cart']`);
    }

    get proceedToCheckoutButton() {
        return browser.$(`[title='Proceed to checkout']`);
    }

    get proceedToCheckoutCartSummary() {
        return browser.$(`.cart_navigation.clearfix [title='Proceed to checkout']`);
    }

    get proceedToCheckoutAddress() {
        return browser.$(`button[name='processAddress']`);
    }

    get proceedToCheckoutShipping() {
        return browser.$(`button[name='processCarrier']`);
    }

    get agreeTermsofService() {
        return browser.$(`#carrier_area .checker`);
    }

    get listView() {
        return browser.$(`#list`);
    }

    get productNamePaymentPage() {
        return browser.$(`#cart_summary .product-name a`);
    }


    //Open Home Page
    openHomePage(){
        browser.maximizeWindow();
        browser.url(`http://automationpractice.com/index.php`);
    }

    //Cick on SignIn link 
    clickSignin(){
        if(this.signInLink.isDisplayed())
        this.signInLink.click();
    }

    //Enter email to register and click on create account
    fillEmailAndSubmit(){
        const email = "mail"+Math.random(1,1000000)+"@test.com"
        this.createAccountEmail.setValue(email);
        this.createAccountButton.click();
        return email;
    }

    //Validate whether Register page is displayed
    verifyRegisterPage(){
        return this.registerPageHeading.isDisplayed();
    }

    //Select Title as Male or Female
    selectGender(title){
        if(title =="Male")
        this.selectTitleMale.click();
        else if (title =="Female")
        this.selectTitleFemale.click();
    }

    /* Fill Registation form details **/
    fillFirstname(name) {
        this.firstName.setValue(name);
    }

    fillLastname(name) {
        this.lastName.setValue(name);
    }

    fillPassword(value) {
        this.password.setValue(value);
    }

    clickRegister() {
        this.registerButton.click();
    }

    selectDOBDay(day) {
       this.days.selectByAttribute('value', day);
    }

    selectDOBMonth(month) {
        this.months.selectByAttribute('value', month);
    }

    selectDOBYear(year) {
        this.years.selectByAttribute('value', year);
    }

    fillCompanyName(name) {
        this.company.setValue(name);
    }

    fillAddress1(address) {
        this.address1.setValue(address);
    }

    fillCity(cityName) {
        this.city.setValue(cityName);
    }

    fillState(stateName) {
        this.state.selectByAttribute('value',stateName);
    }

    fillZipcode(code) {
        this.zipcode.setValue(code);
    }

    fillCountry(countryName) {
        this.country.selectByAttribute('value',countryName);
    }

    fillMobile(number) {
        this.mobilePhone.setValue(number);
    }

    fillAlias(name) {
        this.alias.setValue(name);
    }

    // Get Name after registering the user
    getAccountName() {
        return this.accountNameAfterRegistration.getText();
    }

    //Signout Link
    signOut() {
        this.logoutLink.click();
    }

    // SignIn flow after registration
    signIn(username, password){
        this.clickSignin();
        this.loginEmail.setValue(username);
        this.loginPassword.setValue(password);
        this.signInButton.click();
    }

    //Enter producr name in the Search bar 
    enterProductName(product){
        this.searchBar.setValue(product);
        browser.pause(2000);
    }

    //Click on search icon
     clickSearch() {
         this.searchButton.click();
         browser.pause(2000);
     }

    //Validate whether expected product is displayed
    verifyProductDisplayed(name) {
     return this.searchResult(name).isDisplayed();
    }
   
    //Click on the search results image
    clickProductImage() {
    this.productImage.click();
   }

   //click on AddToCart
    addProductToCart() {
    browser.pause(2000);
    this.addToCartButton.click();
    browser.pause(5000);
    }
    
    //Proceed to checkout
    proceedToCheckout() {
        this.proceedToCheckoutButton.click();
        browser.pause(5000);
    }

    //Click on checkout on summary page
    proceedToCheckoutOnCartSummary() {
        this.proceedToCheckoutCartSummary.click();
        browser.pause(5000);
    }

    //click on checkout address
    proceedToCheckoutOnAddress() {
        this.proceedToCheckoutAddress.click();
        browser.pause(5000);
    }

    //click on checkout on shipping page
    proceedToCheckoutOnShipping() {
        this.proceedToCheckoutShipping.click();
        browser.pause(5000);
    }

    // Click list view after proudct search
    clickOnListView() {
        this.listView.click();
    }

    //Click on Terms of service agree
    clickAgreeTermsofService() {
        this.agreeTermsofService.click();
    }

    //To get product name on the payment page
    getProductNameOnPayment() {
        return this.productNamePaymentPage.getText();
    }


}
export default new RegisterAndCheckout();
