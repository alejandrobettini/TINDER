const {Builder, By, Key, until, Keys} = require ('selenium-webdriver');
const { Given, When, Then, setDefaultTimeout } = require ('cucumber');
var webdriver = require ('selenium-webdriver');
require('chromedriver');
var driver;
setDefaultTimeout(10000000); 
const { badoo} = require(`${process.cwd()}/pages/fc.js`);
const { assert, expect} = require('chai');

//dos vias, la primera que recorra mientras voy mandando mensajes, ver en fb como es ese proceso
            //la segunda es juntar los nombres en un array y despues enviarlos al buscado, tener cuidado con los recortes del substr
            