let signUpLink = document.querySelector(".signUpLink");
let cadastro = document.querySelector(".buttonCadastro");

signUpLink.addEventListener("click", () => {
  menuLogin.classList.remove("activated");
  menuSignUp.classList.add("activated");
});

cadastro.addEventListener("click", () => {
  menuSignUp.classList.remove("activated");
  menuLogin.classList.add("activated");
});
