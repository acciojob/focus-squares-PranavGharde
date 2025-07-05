const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('mouseenter', () => {
    squares.forEach((sq) => {
      if (sq !== square) {
        sq.style.backgroundColor = '#6F4E37';
      } else {
        sq.style.backgroundColor = '#E6E6FA'; 
      }
    });
  });

  square.addEventListener('mouseleave', () => {
    squares.forEach((sq) => {
      sq.style.backgroundColor = '#E6E6FA'; 
    });
  });
});
