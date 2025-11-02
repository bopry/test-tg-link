const buttons = document.querySelectorAll('#top-area div');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('animate');
    setTimeout( () => {
        button.classList.toggle('hidden');
    }, 300)
  });
});