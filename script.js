window.onload = function () {
  const squares = document.querySelectorAll('.square');

  squares.forEach((square, index) => {
    square.addEventListener('mouseenter', () => {
      squares.forEach((otherSquare, i) => {
        otherSquare.style.backgroundColor = (i === index)
          ? '#E6E6FA'  // Lavender
          : '#6F4E37'; // Coffee
      });
    });

    square.addEventListener('mouseleave', () => {
      squares.forEach(sq => {
        sq.style.backgroundColor = '#E6E6FA';
      });
    });
  });
};
