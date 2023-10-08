import DOMNodeCollection from "./dom_node_collection";

const functionsQueue = [];

window.$l = function(input) {
    // If input is a CSS selector, return matching elements
    if (typeof input === "string") {
        const nodeList = document.querySelectorAll(input);
        const nodesArray = Array.from(nodeList);
        return new DOMNodeCollection(nodesArray);

    // If input is an HTMLElement, wrap it in DOMNodeCollection
    } else if (input instanceof HTMLElement) {
        return new DOMNodeCollection([input]);
    
    // if input is a function, add it an array of function ready to be executed
    // when the document is ready
    } else if (typeof input === "function") {
        functionsQueue.push(input);
    }
}

$l.extend = function(target, ...objects) {
    return Object.assign(target, ...objects);
}

$l.ajax = function(options) {
    const defaults = {
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        method: "GET",
        url: "",
        success: () => { },
        error: () => { },
        data: {},
    };
    options = $l.extend(defaults, options);
    const fetchOptions = {
        method: options.method,
        headers: { 'Content-Type': options.contentType}
    }
    if (options.method != "GET") fetchOptions.body = JSON.stringify(options.data);

    fetch(options.url, fetchOptions)
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            return Promise.reject(response);
        }
    }).then(data => options.success(data))
    .catch(options.error);
}
 
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", executeFunctions);
} else {
    executeFunctions();
}

function executeFunctions() {
    functionsQueue.forEach(func => func());
    functionsQueue.length = 0;
}

window.DOMNodeCollection = DOMNodeCollection;