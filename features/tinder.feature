Feature: Tinder

    Scenario: Abrir tinder e inicar sesion
        Given open Tinder
        When iniciar sesion en Tinder con usuario "pipo.mataderos@hotmail.com" y contraseña "Shamshiadad1"
        Then mandar corazones
