describe('Проверка Авторизации', function () {

    it('Верный логин и пароль', function () {
         cy.visit('https://login.qa.studio/');//Зашли на сайт


         cy.get('#mail').type('german@dolnikov.ru ');//Ввести правильный логин
         cy.get('#pass').type('iLoveqastudio1');//Ввести правильный пароль
         cy.get('#loginButton').click();//Нажать войти
         cy.get('#message').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверить нужный текст и наличие кнопки крестик })
        })
    }) 
  
    it('Проверка забыли пароль', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
    
        cy.get('#forgotEmailButton').click(); //Нажать кнопку забыли пароль
        cy.get('#mailForgot') .type('Katasonov.mitya@mail.ru')//Ввести любой имейл
        cy.get('#exitRestoreButton > .exitIcon') .should('be.visible');//  есть кнопка крестика
        cy.get('#restoreEmailButton').click();//нажать на ок
        cy.get('#messageHeader') .contains('Успешно отправили пароль на e-mail');//Проверка, что получили нужный текст 
        

       })

       it('Правильный логин не правильный пароль', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
    
        cy.get('#mail') .type('german@dolnikov.ru ')//Ввели правильный логин
        cy.get('#pass').type('iLoveqastudio');//Ввести не правильный пароль
        cy.get('#loginButton').click();//Нажать войти
        cy.get('#messageHeader') .contains('Такого логина или пароля нет');//проверить текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//проверить крестик

       })


       it('Не правильный логин правильный пароль', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
    
        cy.get('#mail') .type('german@dolniko.ru ')//Ввели не правильный логин
        cy.get('#pass').type('iLoveqastudio1');//Ввести правильный пароль
        cy.get('#loginButton').click();//Нажать войти
        cy.get('#messageHeader') .contains('Такого логина или пароля нет');//проверить текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//проверить крестик

    })
  
    it('негативный кейс валидации ', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
    
        cy.get('#mail') .type('germandolniko.ru ')//Ввести логин без @
        cy.get('#pass').type('iLoveqastudio1');//Ввести правильный пароль
        cy.get('#loginButton').click();//Нажать войти
        cy.get('#messageHeader') .contains('Нужно исправить проблему валидации');//проверить текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//проверить крестик

    })


    it('Проверка строчных букв ', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
    
        cy.get('#mail') .type('GerMan@Dolnikov.ru ')//Ввести логин 
        cy.get('#pass').type('iLoveqastudio1');//Ввести правильный пароль
        cy.get('#loginButton').click();//Нажать войти
        cy.get('#messageHeader') .contains('Авторизация прошла успешно');//проверить текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//проверить крестик

    })