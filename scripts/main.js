/* Aterando a imagem com clicks: */
const myImage = document.querySelector("img");

myImage.addEventListener('click', ()=>{

    const mySrc = myImage.getAttribute("src");
    console.log(mySrc);

    if(mySrc === './images/firefox-logo.png'){
        myImage.setAttribute("src", "./images/firefox-logo2.png");
    }else{
        myImage.setAttribute("src", "./images/firefox-logo.png");
    }

});

/* Alterando o nome do usuário*/

//Recupera o elmento de button para posterior manipulação:
let myButton = document.querySelector("button");
//Recupera o elmento de h1 para posterior manipulação:
let myHeading = document.querySelector("h1");

/* Essa função vai solicitar o nome do usuário e armazenar esse nome
no localstorage para posterior recuperação */
function setUserName() {
    //Solicita um nome de susuário:
    const myName = prompt("Please enter your name.");

    //Verifica se um nome foi inserido e força a inserção do nome caso necessário
    if(!myName){
        setUserName();
    }else{
        //Armazena o nome de usuário informado no locastorage:
        localStorage.setItem("name", myName);

        //Altera a mensagem do tag h1 para uma saudação personalizada com o nome do usuário informado:
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }

}

/* Código que verifica se o usuário já informou um nome: */
//Caso o usuário não tenha informado o nome:
if (!localStorage.getItem("name")) {
    setUserName();
//Caso o usuário já tenha informado o nome:
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

/* Permite trocar o nome do usuário clicando no botão: */
myButton.addEventListener("click", () => {
    setUserName();
});