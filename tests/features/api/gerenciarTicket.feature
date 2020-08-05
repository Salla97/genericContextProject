Feature: Gerenciar Ticket no sistema freshdesk via API
   Como usuário da API do Freshdesk
   Eu desejo visualizar dados do ticket via API
   Para que eu possa validar o retorno do response

   #API01 
   Scenario: Visualizar Tickets
     When executar API de visualizar ticket
     Then a execução é realizada com sucesso