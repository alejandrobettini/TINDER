const {Builder, By, Key, until, Keys} = require ('selenium-webdriver');
const { Given, When, Then, setDefaultTimeout } = require ('cucumber');
var webdriver = require ('selenium-webdriver');
require('chromedriver');
var driver;
setDefaultTimeout(10000000); 
const { badoo} = require(`${process.cwd()}/pages/badoo.js`);
const { assert, expect} = require('chai');
var mgAdar = 2000;

function randomTime (min, max){

    return Math.floor (Math.random() * (max-min + 1) + min);
};


var usuario = 'pipo.mataderos@hotmail.com';
var contraseña = 'Shamshiadad1';
var mgAdar = 2000;

Given ('abro badoo e ingreso', async function (){

    this.driver = await new webdriver.Builder().forBrowser('chrome').build();
    await this.driver.manage().window().maximize();
    await this.driver.get ('https://badoo.com/');
    

    await this.driver.wait(until.elementLocated(By.xpath(badoo.iniciarSesionFb)));
    var iniciarSesionFb = await this.driver.findElement(By.xpath(badoo.iniciarSesionFb)).click();
    await this.driver.sleep(5000);

    var handles = await this.driver.getAllWindowHandles();
    await this.driver.switchTo().window(handles[1]);

    await this.driver.wait(until.elementLocated(By.xpath(badoo.correo)));
    var correo = await this.driver.findElement(By.xpath(badoo.correo)).sendKeys(usuario);
    var clave = await this.driver.findElement(By.xpath(badoo.clave)).sendKeys(contraseña);
    var entrar = await (await this.driver.findElement(By.xpath(badoo.entrar))).click();

    await this.driver.switchTo().window("");

    await this.driver.sleep(5000);

})

When ('buitreo corazones', async function (){

    var recuentoMg = 0;
    var i = 0;
    while(i<mgAdar){
await this.driver.wait(until.elementLocated(By.xpath(badoo.corazon)));
var corazon = await this.driver.findElement(By.xpath(badoo.corazon));
await this.driver.sleep(randomTime(200,350));
await corazon.click();
recuentoMg++;
i++;


    }
    console.log(recuentoMg);
});






