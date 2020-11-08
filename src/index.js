import DOMNodeCollection from "./dom_node_collection.js";

// core function
// function $l (selectors) { 
//   const elementList = document.querySelectorAll(selectors);
//   const htmlElement = Array.from(elementList);
//   return new DOMNodeCollection(htmlElement);
// }

function $l (arg) { 
  const queue = [];

  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  } else if (arg instanceof Function) {
    queue.push(arg);
    document.addEventListener('DOMContentLoaded', arg);
  } else {
    const elementList = document.querySelectorAll(arg);
    const nodes = Array.from(elementList);
    return new DOMNodeCollection(nodes);
  }
}
// They bind to the DOMContentLoaded event(or onreadystatechange on some browsers).They also have 
// a fallback to the regular load event, in case the DOMContentLoaded isn't supported or not
//  fired for other reasons. On browsers supporting it, they use this call:

// document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);

window.$l = $l;

