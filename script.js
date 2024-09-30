let sliderElement = document.querySelector("#slider");
let buttonElent = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
let novaSenha =  "";

/*inicio do cod, valor (sizePassword)*/
sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){ /*função responsável por alterar o número de quantidade de caracteres #valor*/
    sizePassword.innerHTML = this.value;
}

/*FIM do cod, valor (sizePassword)*/

function gerarSenharAlert(){
    
    let pass = "";
    for (let i =0, n = charset.length; i <sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide")
    password.innerHTML = pass
    NovaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);

}

