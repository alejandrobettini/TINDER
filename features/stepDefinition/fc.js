const {Builder, By, Key, until, Keys} = require ('selenium-webdriver');
const { Given, When, Then, setDefaultTimeout } = require ('cucumber');
var webdriver = require ('selenium-webdriver');
require('chromedriver');
var driver;
setDefaultTimeout(10000000); 
const { fc} = require(`${process.cwd()}/pages/fc.js`);
const { assert, expect} = require('chai');

function randomNumer (min, max){

    return Math.floor (Math.random() * (max-min + 1) + min);

};

//dos vias, la primera que recorra mientras voy mandando mensajes, ver en fb como es ese proceso
            //la segunda es juntar los nombres en un array y despues enviarlos al buscado, tener cuidado con los recortes del substr
            
 Given ('abro la pagina de fc', async function () {
    this.driver = await new webdriver.Builder().forBrowser('chrome').build();
    await this.driver.manage().window().maximize();
    await this.driver.get ('http://www.facebook.com');

    await this.driver.wait(until.elementLocated(By.id('email')));
    var mail = await this.driver.findElement(By.id('email')).sendKeys('pipo.mataderos@hotmail.com');
    await this.driver.wait(until.elementsLocated(By.id('pass')));
    var clave = await this.driver.findElement(By.id('pass')).sendKeys('Shamshiadad1');

    await this.driver.wait(until.elementsLocated(By.id('u_0_b')));
    var entrar = await this.driver.findElement(By.id('u_0_b')).click();

    });

    When('recorro la lista', async function(){
        await this.driver.wait(until.elementsLocated(By.xpath(fc.botonNotificaion)));
        var botonNotificaion = await this.driver.findElement(By.xpath(fc.botonNotificaion)).click();
        await this.driver.sleep(10000);
 
        await this.driver.wait(until.elementsLocated(By.xpath(fc.lista)));
        var lista = await this.driver.findElements(By.xpath(fc.lista));
        var i = 0;
        while(i<lista.length){
            await this.driver.wait(until.elementsLocated(By.xpath(fc.listaCompleta)));
            var listaCompleta = await this.driver.findElements(By.xpath(fc.listaCompleta));
            await this.driver.sleep(10000);
            await this.driver.executeScript("arguments[0].scrollIntoView(true);", listaCompleta[i]);
            var a = await listaCompleta[i].getText();

            await this.driver.wait(until.elementsLocated(By.xpath(fc.nombre)));
            var b = await this.driver.findElements(By.xpath(fc.nombre));
            var nombre = await b[i].getText();
            try{

                var c = await this.driver.findElements(By.xpath(fc.noLeida));
                var noLeida = await c[i].getText();
            }catch{};

               var comparar = a.replace(nombre, '');
               if(nombre != undefined){
                   var comparar = comparar.replace(noLeida, '');
               } 

               if(comparar.includes('aceptó tu solicitud de amistad')){
                //hago click en el nombre
               await listaCompleta[i].click();
               await this.driver.sleep(2000);
                //hago click en abrir para enviar mensajes
                await this.driver.wait(until.elementsLocated(By.xpath(fc.mensaje)));
                var mensaje = await this.driver.findElement(By.xpath(fc.mensaje)).click();
                //hago click en el campo de envio mensaje
                await this.driver.wait(until.elementsLocated(By.xpath(fc.barraMensaje)));
                var barraMensaje = await this.driver.findElement(By.xpath(fc.barraMensaje));
                
                var j = randomNumer(1, 4);

                if(j == 1){
                    await barraMensaje.sendKeys('Hola!');
                    await barraMensaje.sendKeys(Key.ENTER);
                    await barraMensaje.sendKeys('Todo bien?');
                    await barraMensaje.sendKeys(Key.ENTER);
                }else if(j == 2){
                    await barraMensaje.sendKeys('Buenas');
                    await barraMensaje.sendKeys(Key.ENTER);
                    await barraMensaje.sendKeys('Como va?');
                    await barraMensaje.sendKeys(Key.ENTER);
                }else if(j == 3){
                    await barraMensaje.sendKeys('Que onda');
                    await barraMensaje.sendKeys(Key.ENTER);
                    await barraMensaje.sendKeys('Todo tranqui?');
                    await barraMensaje.sendKeys(Key.ENTER);
                }else if(j == 4){
                    await barraMensaje.sendKeys('Hola!');
                    await barraMensaje.sendKeys(Key.ENTER);
                    await barraMensaje.sendKeys('Como andas?');
                    await barraMensaje.sendKeys(Key.ENTER);
                }

                await this.driver.sleep(2000);
                await this.driver.wait(until.elementsLocated(By.xpath(fc.cerrarMensaje)));
                var cerrarMensaje = await this.driver.findElement(By.xpath(fc.cerrarMensaje)).click();
                
               }
               await this.driver.navigate().to('http://www.facebook.com');
               await this.driver.wait(until.elementsLocated(By.xpath(fc.botonNotificaion)));
        var botonNotificaion = await this.driver.findElement(By.xpath(fc.botonNotificaion)).click();
        await this.driver.sleep(10000);
            i++;
        }
        
    
    })
