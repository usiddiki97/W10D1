import DOMNodeCollection from "./dom_node_collection.js";

// core function
function $l (selectors) { 
  const elementList = document.querySelectorAll(selectors);
  const htmlElement = Array.from(elementList);
  return new DOMNodeCollection(htmlElement);
}

window.$l = $l;