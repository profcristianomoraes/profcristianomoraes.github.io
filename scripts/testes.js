/* Exemplo de declaração de consatante: */
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

/* Exemplo de declaração de estrutura de decisão: */
//Declara uma variável
let iceCream = "chocolate";
//Testa o valor da variável
if (iceCream === "chocolate") {
    //Ação se o teste resultar em true (é igual)
    //alert("Yay, I love chocolate ice cream!");
    console.log("SAÍDA DA ESTRUTURA DE DECISÃO(TRUE):")
    console.log("Yay, I love chocolate ice cream!")
} else {
    //Ação se o teste resultar em false (não é igual)
    //alert("Awwww, but chocolate is my favorite…");
    console.log("SAÍDA DA ESTRUTURA DE DECISÃO(FALSE):")
    console.log("Awwww, but chocolate is my favorite…");
}

/* Exemplo de função */
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
//Chamada da funcão:
console.log("SAÍDA DA FUNÇÃO DE MULTIPLICAÇÃO:")
console.log(multiply(10,10));
console.log(multiply(4, 7));
console.log(multiply(20, 20));
console.log(multiply(0.5, 3));

/* Exemplo de evento: */
//O tratamento da ação de click é feito com uma função anomima:
document.querySelector("html").addEventListener("click", function () {
    //alert("Ouch! Stop poking me!");
    console.log("Evento de click! Função anonima.");
});

/* Exemplo de evento: */
//O tratamento da ação de click é feito com uma arrow function:
document.querySelector("html").addEventListener("click", () => {
    // alert("Ouch! Stop poking me!");
    console.log("Evento de click! Arrow function.");
});