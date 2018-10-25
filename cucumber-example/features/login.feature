Feature: Login
 Eu desejo entrar no sistema como um admin
    Scenario: Login by email
     Given que estou na pagina de login
      When eu digitar o email "admin@gmail.com" com a senha "adminpass"
      And clicar no botão de submit
      Then eu deveria estar logado
     