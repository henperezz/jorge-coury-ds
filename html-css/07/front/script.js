let signUpLink = document.getElementById("signUpLink");
let cadastro = document.querySelector(".buttonCadastro");

let menuLogin = document.querySelector(".menuLogin");
let menuSignUp = document.querySelector(".menuSignUp");

signUpLink.addEventListener("click", (e) => {
  e.preventDefault;
  menuLogin.classList.remove("activated");
  menuSignUp.classList.add("activated");
});

cadastro.addEventListener("click", (e) => {
  e.preventDefault;
  menuSignUp.classList.remove("activated");
  menuLogin.classList.add("activated");
});
