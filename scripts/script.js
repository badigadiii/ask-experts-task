let counter = 0;

button = document.querySelector('.counter-button')
counterTextElement = document.querySelector('.counter-button-result span')

button.addEventListener("click", () => {
    counter += 1;
    counterTextElement.textContent = counter;
})