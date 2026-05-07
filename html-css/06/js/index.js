const buttons = document.querySelectorAll(".button");
const characters = document.querySelectorAll(".character");

buttons.forEach((buttons, index) => {
  buttons.addEventListener("click", () => {
    const selectedButton = document.querySelector(".button.selected");
    selectedButton.classList.remove("selected");
    buttons.classList.add("selected");

    const selectedCharacter = document.querySelector(".character.selected");
    selectedCharacter.classList.remove("selected");
    characters[index].classList.add("selected");
  });
});
