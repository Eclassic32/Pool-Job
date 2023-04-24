const slider = document.querySelector('#sizeF');
const output = document.querySelector('#sizeFout span');

slider.addEventListener('input', function() {
  output.textContent = `${this.value}x3`;
});