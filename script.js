const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('mouseenter', () => {
    squares.forEach((sq) => {
      sq.style.backgroundColor = sq === square ? '#E6E6FA' : '#6F4E37';
    });
  });

  square.addEventListener('mouseleave', () => {
    squares.forEach((sq) => {
      sq.style.backgroundColor = '#E6E6FA';
    });
  });
});
