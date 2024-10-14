/*IIFE => Immediately Invoked Function Expression - Expressão de função invocada imediatamente
Para fugir do escopo global é utilizado a função auto-invocada para não haver problemas com as aplicações no browser. 
*/
(function(){
    console.log('Será executado na hora!')
    console.log ('Foge do escopo mais abrangente!')
})()