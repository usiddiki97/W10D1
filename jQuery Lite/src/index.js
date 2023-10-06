import DOMNodeCollection from "./dom_node_collection";

window.$l = function(input) {
    // If input is a CSS selector, return matching elements
    if (typeof input === "string") {
        const nodeList = document.querySelectorAll(input);
        const nodesArray = Array.from(nodeList);
        return new DOMNodeCollection(nodesArray);

    // If input is an HTMLElement, wrap it in DOMNodeCollection
    } else if (input instanceof HTMLElement) {
        return new DOMNodeCollection([input]);
    }
}

window.DOMNodeCollection = DOMNodeCollection;