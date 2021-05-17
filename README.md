# automation-practice-pavan
#Repository with webdriverio test framework

## Please have the following ones installed 
## Java
## git
## NodeJS ( Version 15.12.0 )
## VisualStudio Code
## Chrome browser
    ## before we start, make sure Java, node and npm versions are verified ( java -version, node -v, npm -v)

Step1. Clone the project to local and open the same in VS code

git clone https://github.com/pdhulipudi/automation-practice-pavan.git

Step2. Open terminal / cmd.exe and navigate inside project structure and install required npm packages

npm install webdriverio --save-dev  
npm install cucumber --save-dev
npm i --save-dev @wdio/cli
npm install

( Since there could be version mismatch with packages, node_modules folder has been uploaded incase npm packages installation failed with any reason.)

Step3. Run wdio test using below command

./node_modules/.bin/wdio wdio.conf.js      ( MAC OS)

.\node_modules\.bin\wdio wdio.conf.js      (Windows)

# Results saved to allure-results folder





