function squaredNumbers() {
  const numberList = document.querySelectorAll('.number');

  numberList.forEach((el) => {
    const chislo = el.getAttribute('data-number');
    el.setAttribute("data-squared-number", chislo * chislo);
  });
}

squaredNumbers();