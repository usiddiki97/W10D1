class DOMNodeCollection {
    constructor(nodes) {
        this.nodes = nodes;
    }

    each(cb) {
        this.nodes.forEach(cb);
    }

    html(content) {
        if (typeof content === "string") {
            // sets innerHTML of each HTMLElement
            this.each(node => node.innerHTML = content);
        } else if (this.nodes.length > 0) {
            // gets the innerHTML of the first HTMLElement in array
            return this.nodes[0].innerHTML;
        }
    }

    empty() {
        this.html('');
    }

    append(input) {
        if (input instanceof DOMNodeCollection) {
            this.each(node => {
                input.nodes.forEach(childNode => {
                    node.appendChild(childNode.cloneNode(true));
                })
            })
        } else if (input instanceof HTMLElement) {
            this.each(node => {
                node.appendChild(input.cloneNode(true));
            });
        } else if (typeof input === "string") {
            this.each(node => {
                node.innerHTML += input;
            })
        }
    }

    attr(attr, val) {
        if (val === undefined && this.nodes.length > 0) {
            return this.nodes[0].getAttribute(attr);
        } else {
            this.each(node => node.setAttribute(attr, val));
        }
    }

    addClass(className) {
        if (className instanceof Array) {
            this.each(node => {
                className.forEach(name => {
                    node.classList.add(name);
                })
            })
        } else {
            this.each(node => node.classList.add(className));
        }
    }

    removeClass(className) {
        if (className instanceof Array) {
            this.each(node => {
                className.forEach(name => {
                    node.classList.remove(name);
                })
            })
        } else {
            this.each(node => node.classList.remove(className));
        }
    }

    children(selector) {
        let childNodes = [];
        this.each(node => {
            const childNodeList = node.children;
            childNodes = childNodes.concat(Array.from(childNodeList));
        });

        if (typeof selector === "string") {
            childNodes = childNodes.filter(childNode => childNode.matches(selector));
        }
        return new DOMNodeCollection(childNodes);
    }

    parent(selector) {
        let parentNodes = [];
        this.each(node => {
            const parentNode = node.parentElement
            if (!parentNodes.includes(parentNode)) {
                parentNodes.push(parentNode);
            }
        })
        if (typeof selector === "string") {
            parentNodes = parentNodes.filter(parentNode => parentNode.matches(selector));
        }
        return new DOMNodeCollection(parentNodes);
    }

    find(selector) {
        let found = [];
        this.each(node => {
            const descendants = node.querySelectorAll(selector);
            found = found.concat(Array.from(descendants));
        })
        return new DOMNodeCollection(found);
    }

    remove(selector) {
        let rejected = (typeof selector === "string" ? this.find(selector) : this)
        rejected.each(node => node.remove());
    }

    on(eventName, handler) {
        this.each(node => {
            node.addEventListener(eventName, handler);
            const eventKey = `jqlite-${eventName}`;
            if (!node[eventKey]) node[eventKey] = [];
            node[eventKey].push(handler);
        })
    }

    off(eventName) {
        this.each(node => {
            const eventKey = `jqlite-${eventName}`;
            const handlers = node[eventKey];
            if (handlers) {
                handlers.forEach(handler => {
                    node.removeEventListener(eventName, handler);
                })
            }
            handlers = [];            
        })
    }
}

export default DOMNodeCollection;