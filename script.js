window.onload = function () {
  const squares = document.querySelectorAll('.square');

  squares.forEach((square, index) => {
    square.addEventListener('mouseover', () => {
      squares.forEach((otherSquare, i) => {
        if (i !== index) {
          otherSquare.classList.add('coffee');
        }
      });
    });
    square.addEventListener('mouseout', () => {
      squares.forEach(sq => {
        sq.classList.remove('coffee');
      });
    });
  });
};
