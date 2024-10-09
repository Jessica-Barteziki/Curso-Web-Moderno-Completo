//Null é ausencia de valor - não aponta para nenhum objeto da memória (definida), enquanto Underfined é que não foi iniciado a referencia. Usar o null caso queria zerar uma variavel tipo referencia, que aponta para um objeto ou uma função, não é indicado usar underfined, deixar para o JS usar quando achar necessário
let valor; // Underfined
console.log(valor);

valor = null; //Null
console.log(valor);
// console.log(valor.toString()); //Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //evitar atribuir undefined
console.log(!!produto.preco);;
delete produto.preco; // quando quiser deletar alguma variável
console.log(produto);

produto.preco = null; //sem preço
console.log(!!produto.preco);
console.log(produto);