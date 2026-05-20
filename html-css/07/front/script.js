let signUpText = document.querySelector(".signUpText");

signUpText.addEventListener("click", () => {
  menuSignUp.classList.add("activated");
  menuLogin.classList.remove("activated");
});
