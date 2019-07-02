# Blockchain with JavaScript

## API
O objetivo da aplição é criar uma API HTTP para a interação de nós formando uma blockchain.

As funcionalidades são:
* Criar transação
* Espalhar transação
* Minerar bloco
* Validar bloco
* Espalhar bloco
* Associar-se com outros nós
* Escolher melhor bloco (Consensus Algorithm)

## Block Explorer

Além da API, há um pequeno site para visualizar os dados dos blocos associados a um nó.
___

## Blockchain
* Banco de dados decentralizado público ou privado.
* Baseado em algorítimos de consenso para evitar conflitos.
* Nessa rede, um bloco corrompido é facilmente identificado pois basta que os nós *honestos* não o aceitem.

### Blocos
* Cada bloco é composto por transações validadas por toda rede.
* Cada bloco possui um *Nonce* e armazenda o *Sign* do bloco anterior.
  * O *Nonce* é um id arbitrário.
  * O *Sign* contém todas as informações do bloco passadas no algorítimos de hash SHA256.

### Mineração
* Encontra um novo bloco válido.
* Todos os nós validam o bloco e, assim, ele se espalha na rede.

### Possíveis usos
* Ferramentas de registro
* Cartório
* Rastreamento de itens

