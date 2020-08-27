const {Builder, By, Key, until, Keys} = require ('selenium-webdriver');
const { Given, When, Then, setDefaultTimeout } = require ('cucumber');
var webdriver = require ('selenium-webdriver');
require('chromedriver');
var driver;
setDefaultTimeout(10000000); 
const { WElements} = require(`${process.cwd()}/pages/tinder.js`);
const { assert, expect} = require('chai');
var mgAdar = 2000;

function randomTime (min, max){

    return Math.floor (Math.random() * (max-min + 1) + min);

};

//usingServer('https://5cae3f60.ngrok.io/wd/hub')
Given ('open Tinder', async function () {
this.driver = await new webdriver.Builder().forBrowser('chrome').build();
await this.driver.get ('http://www.tinder.com');
});

When(/^iniciar sesion en Tinder con usuario "(.*)" y contraseña "(.*)"$/, async function (usuario, contraseña) {
    
    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEingresar)));
    var WEIngresar = await this.driver.findElement(By.xpath(WElements.WEingresar));
    await WEIngresar.click();

   await this.driver.sleep(6000);
    try{
        var WEmasOpciones = await this.driver.findElement(By.xpath(WElements.WEmasOpciones));
        await WEmasOpciones.click();
    }catch{
        console.log ("no fue encontrado el boton mas opciones");
    }finally{
        await this.driver.sleep(2000);
        var WEiniciarSesionFb = await this.driver.findElement(By.xpath(WElements.WEiniciarSesionFb));
        await WEiniciarSesionFb.click();
    };

    await this.driver.sleep(2000);
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
    var total = 0;
    var error = 0;
    

    await this.driver.sleep(6000);
   /* for (var y=0; y=10; y++){
        try{
            await this.driver.wait(until.elementLocated(By.xpath(WE.WEnoGracias)));
            var WEnoGracias = await this.driver(findElement(By.xpath(WE.WEnoGracias)));
            await WEnoGracias.click ();
        }catch{
            console.log ('no salio la pop up');

        }finally{
            await this.driver.wait(until.elementLocated(By.xpath(WElements.WEcorazon)));
            let WEcorazon = await this.driver.findElement(By.xpath(WElements.WEcorazon));
            await this.driver.sleep(randomTime(200, 300));
            await WEcorazon.click();
        }
    };*/
   
    for (var i=0; i<=mgAdar;i++){
        try { 
        await this.driver.wait(until.elementLocated(By.xpath(WElements.WEcorazon)));
        let WEcorazon = await this.driver.findElement(By.xpath(WElements.WEcorazon));
        await this.driver.sleep(randomTime(200, 300));
        await WEcorazon.click();

       } catch{
           error ++;
        
       }finally{
        console.log ('mg dados: ', + total);
        total ++;;
       }
    };

    console.info ('El total de los MG dados fue de: ', + total);
    console.error ('El total de los errores fue de: ', + error);
});