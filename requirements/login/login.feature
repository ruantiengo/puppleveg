Feature: Login
Como um cliente
Quero poder acessar minha conta e me manter logado.

Cenário: Credencias Validas
Dado que o cliente informou Credencias Validas
Quando solicitar para fazer Login
Então o sistema deve enviar o usuario para a tela principal do sistema
E manter o usuario conectado.

Cenário: Credencias Invalidas
Dado que o cliente informou Credencias Invalidas
Quando solicitar para fazer Login
Então o sistema deve retornar uma mensagem de erro.