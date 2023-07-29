const tableCells = document.querySelectorAll('.table td');

tableCells.forEach(cell => {
  cell.addEventListener('mouseover', () => {
    if (parseInt(cell.textContent) % 2 === 0) {
      cell.classList.add('even');
    } else {
      cell.classList.add('odd');
    }
  });

  cell.addEventListener('mouseout', () => {
    cell.classList.remove('even', 'odd');
  });
});