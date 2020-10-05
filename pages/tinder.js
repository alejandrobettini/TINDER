let WElements = {

    WEingresar: '//button[contains (. , "Inicia sesión")]',
    WEemail: '//*[@id="email"]',
    WEcontraseña: '//*[@id="pass"]',
    WEiniciarSesionFb: '//button[@aria-label="Inicia sesión con Facebook"]', 
    WEentrar: '//input[@value="Entrar"]',
    WEcorazon: '//button[@aria-label="Me gusta"]',
    WEsuperlike: '//button[@aria-label="Super Like"]',
    WErechazo: '//button[@aria-label="Nope"]',
    
    WEpermitir: '//button[@type="button" and @aria-label="Permitir"]', 
    WEhabilitar: '//button[@type="button"and @aria-label="Habilitar"]',
    WEacepto: '//span[(.="Acepto")]',
    WEbotonNO: '//span[.= "No, gracias"]',
    WEmasOpciones: '//button[.="Más opciones"]',
    WEnoGracias: '//button/span[contains (text(), "No me interesa")]',
    WEnoSuperLike: '//div[@id="modal-manager"]//span[contains(text(), "No, gracias")]' //  otra opcion: //div[@id="modal-manager"]/div/div/button[2]
};

module.exports = {
    WElements
};
