let WElements = {

    WEingresar: '//button[contains (. , "Inicia sesión")]',
    WEemail: '//*[@id="email"]',
    WEcontraseña: '//*[@id="pass"]',
    WEiniciarSesionFb: '//button[@aria-label="Inicia sesión con Facebook"]', 
    WEentrar: '//input[@value="Entrar"]',
    WEcorazon: '//div[@id="content"]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[2]/div[4]/button',
    WEsuperlike: '//button[@aria-label="Super Like"]',
    WErechazo: '//button[@aria-label="Nope"]',
    
    WEpermitir: '//button[@type="button" and @aria-label="Permitir"]', 
    WEhabilitar: '//button[@type="button"and @aria-label="Habilitar"]',
    WEacepto: '//span[(.="Acepto")]',
    WEbotonNO: '//span[.= "No, gracias"]',
    WEmasOpciones: '//button[.="Más opciones"]',
    WEnoGracias: '//button/span[contains (text(), "No me interesa")]',
    WEnoSuperLike: '//div[@id="modal-manager"]//span[contains(text(), "No, gracias")]', //  otra opcion: //div[@id="modal-manager"]/div/div/button[2]
    WEcloseMatch: '//button[@title="Volver a Tinder"]'
};

module.exports = {
    WElements
};
