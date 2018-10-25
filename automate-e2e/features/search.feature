Feature: Pesquisar 
    I want search by laptops
    
    Scenario: Pesquisar pelo Macbook Pro
      Given I am in the page from "https://amazon.com.br"
      When I search by "Macbook Pro"
      And I press "Enter" button
      And Access the first link from results list
      Then I should be on the macbook page with this name "Apple MacBook Pro 13'' MPXU2 (Prata)"
     