class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }

  html(string) {
    if (string) {
      this.htmlElements.forEach(el => {
        el.innerHTML = string;
      })
    } else {
      return this.htmlElements[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }

  append(childElement) {
    this.htmlElements.forEach(el => {
      el.innerHTML += childElement.outerHTML;
    })
  }

  attr(key, val) {
    if (val) {
      this.htmlElements.forEach(el => {
        el.setAttribute(key, val);
      })
    } else {
      return this.htmlElements[0].getAttribute(key);
    }
  }

  addClass(newClass) {
    this.htmlElements.forEach(el => {
      el.classList.add(newClass);
    })
  }

  removeClass(oldClass) {
    this.htmlElements.forEach(el => {
      el.classList.remove(oldClass);
    })
  }

  children() {
    let children = [];
    this.htmlElements.forEach(el => {
      children = children.concat(Array.from(el.children));
    })
    return new DOMNodeCollection(children);
  }

  parent() {
    let parents = [];
    this.htmlElements.forEach(el => {
      let parent = el.parentNode;
      if (!parents.includes(parent)) {
        parents.push(parent);
      }
    })
    return new DOMNodeCollection(parents);
  }

  find(selector) {
    let elementList = [];
    this.htmlElements.forEach(el => {
      const nodes = el.querySelectorAll(selector); 
      elementList = elementList.concat(Array.from(nodes));
    })
    return new DOMNodeCollection(elementList);
  }
  
  remove() {
    this.htmlElements.forEach(el => el.remove());
  }

  on(action, eventCallback) {
    this.htmlElements.forEach(node => {
      node.addEventListener(action, eventCallback);
      node.callback = eventCallback;
    })
  }

  off(action) {
    this.htmlElements.forEach(node => {
      node.removeEventListener(action, node.callback);
    })
  }
}



module.exports = DOMNodeCollection;