const selection = document.querySelectorAll('.btn');
const sub = document.getElementById('submit');
const section = document.querySelector('.thanks_state');
const main = document.querySelector('.main');
const selected = document.getElementById('selected');

const ar = Array.from(selection);
selection.forEach((button) => {
  button.addEventListener('click', function (button) {
    const current = button.currentTarget;
    const data = current.value;
    selected.textContent = data;
    current.style.backgroundColor = 'hsl(25, 97%, 53%)';
    current.style.color = 'hsl(0, 0%, 100%)';
  });
});

sub.addEventListener('click', (e) => {
  e.preventDefault();
  section.style.display = 'flex';
  main.style.display = 'none';
});
