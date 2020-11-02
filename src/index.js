function $l (selectors) {
  let elementList = document.querySelectorAll(selectors);
  return Array.from(elementList);
}

window.$l = $l;