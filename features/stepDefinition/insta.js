const {Builder, By, Key, until, Keys} = require ('selenium-webdriver');
const { Given, When, Then, setDefaultTimeout } = require ('cucumber');
var webdriver = require ('selenium-webdriver');
require('chromedriver');
var driver;
setDefaultTimeout(10000000); 
const { badoo} = require(`${process.cwd()}/pages/badoo.js`);
const { assert, expect} = require('chai');
var usersNames = [];


Given('abro insta e inicio sesion', async function(){

this.driver = await new webdriver.Builder().forBrowser('chrome').build();
await this.driver.manage().window().maximize();
await this.driver.get ('http://www.instagram.com');

await this.driver.wait(until.elementLocated(By.xpath('//input[@name="username"]')));
var userName = await this.driver.findElement(By.xpath('//input[@name="username"]')).sendKeys('pipo.mataderos@hotmail.com');
await this.driver.wait(until.elementLocated(By.xpath('//input[@name="password"]')));
var password = await this.driver.findElement(By.xpath('//input[@name="password"]')).sendKeys('Drittesreich1');
await this.driver.wait(until.elementLocated(By.xpath("//button[contains(.,'Iniciar sesión')]/div")));
var iniciarSesion = await (await this.driver.findElement(By.xpath('//button[contains(.,"Iniciar sesión")]/div'))).click();

await this.driver.sleep(4000)
await this.driver.navigate().to('https://www.instagram.com/alejandrobettini/');
await this.driver.sleep(2000);
//agrer sleep y 
})

When('dejo de seguir', async function(){



    //entro al perfil 
    
    //abro los seguidores

    for(var i=0; i<1250; i++){


        var modalSeguidores = await this.driver.findElement(By.xpath('//div[@class="isgrP"]'));
        await this.driver.wait(until.elementsLocated(By.xpath('//div[@role="dialog"]/div/div[2]/ul/div/li/div/div[1]/div[2]/div[1]/span/a')));
        var listaSeguidores = await this.driver.findElements(By.xpath('//div[@role="dialog"]/div/div[2]/ul/div/li/div/div[1]/div[2]/div[1]/span/a'));

        var userName = await listaSeguidores[i].getText();
        await usersNames.push(userName);
        
        await this.driver.executeScript("arguments[0].scrollTop = arguments[0].scrollHeight", modalSeguidores)

        
    }
    
    for(var j=0; j<1250; j++){

        //opcion 1: //html/body/div[5]/div/div/div[2]/ul/div/li/div/div[1]/div[2]/div[1]/span/a
        //opc 2 :   //div[@role="dialog"]/div/div[2]/ul/div/li/div/div[1]/div[2]/div[1]/span/a


        await this.driver.executeScript("arguments[0].scrollIntoView(true);", listaSeguidores[i])
    
        await this.driver.sleep(500);
        
        var userName = await listaSeguidores[i].getText();
        await usersNames.push(userName);
    }
});