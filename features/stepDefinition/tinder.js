const {Builder, By, Key, until, Keys} = require ('selenium-webdriver');
const { Given, When, Then, setDefaultTimeout } = require ('cucumber');
var webdriver = require ('selenium-webdriver');
require('chromedriver');
var driver;
setDefaultTimeout(100000);
const { WElements} = require(`${process.cwd()}/pages/tinder.js`);
const { assert, expect} = require('chai');
var nameLike;

function randomTime (min, max){

    return Math.floor (Math.random() * (max-min + 1) + min);

};

//usingServer('https://5cae3f60.ngrok.io/wd/hub')
Given ('open Tinder', async function () {
this.driver = await new webdriver.Builder().forBrowser('chrome').build();
await this.driver.get ('http://www.tinder.com');
});

When(/^iniciar sesion en Tinder con usuario "(.*)" y contraseña "(.*)"$/, async function (usuario, contraseña) {
    await this.driver.sleep(6000);
    try { 
    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEmasOpciones)));
    var WEmasOpciones = await this.driver.findElement(By.xpath(WElements.WEmasOpciones)); 
    await WEmasOpciones.click();
} catch (error) {     
}

    await this.driver.sleep(4000);
    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEiniciarSesionFb)));
    await this.driver.sleep(4000);
    var WEiniciarSesionFb = await this.driver.findElement(By.xpath(WElements.WEiniciarSesionFb)); 
    await WEiniciarSesionFb.click();
    
    let handles = await this.driver.getAllWindowHandles();
    await this.driver.switchTo().window(handles[1]);

    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEemail)));
    var WEemail = await this.driver.findElement(By.xpath(WElements.WEemail));
    await WEemail.sendKeys(usuario);
    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEcontraseña)));
    var WEcontraseña = await this.driver.findElement(By.xpath(WElements.WEcontraseña));
    await WEcontraseña.sendKeys(contraseña);
    await this.driver.findElement(By.xpath(WElements.WEentrar)).click();
    await this.driver.switchTo().window(handles[0]);
    
    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEpermitir)));
    var WEpermitir = await this.driver.findElement(By.xpath(WElements.WEpermitir)); 
    await WEpermitir.click();

    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEhabilitar)));
    var WEhabilitar = await this.driver.findElement(By.xpath(WElements.WEhabilitar)); 
    await WEhabilitar.click();
    
    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEacepto)));
    var WEacepto = await this.driver.findElement(By.xpath(WElements.WEacepto)); 
    await WEacepto.click();
   /*
    try{
    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEbotonNO)));
    var WEbotonNO = await this.driver.findElement(By.xpath(WElements.WEbotonNO)); 
    await WEbotonNO.click();
} catch (error) {     
}
*/
});


Then('mandar corazones', async function () {
    await this.driver.sleep(6000);
    for (var i=0; i<=5000;i++){
        try { 
        await this.driver.wait(until.elementLocated(By.xpath(WElements.WEcorazon)));
        let WEcorazon = await this.driver.findElement(By.xpath(WElements.WEcorazon));
        await this.driver.sleep(randomTime(200, 300));
        await WEcorazon.click();

       } catch (error) {
        
       }
    }
});