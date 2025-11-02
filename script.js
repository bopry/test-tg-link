const buttons = document.querySelectorAll('#top-area div');

const alert = document.querySelector(".aside-settings");

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('animate');
    alert.style.transform = "translate(50%,50%)";
    setTimeout( () => {
        button.classList.toggle('hidden');
    }, 300)
  });
});


alert