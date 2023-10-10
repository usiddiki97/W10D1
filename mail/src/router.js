class Router {
    constructor(node, routes) {
        this.node = node;
        this.routes = routes;
    }

    start() {
        // immediately updates DOM
        this.render();
        // makes the Router update DOM every time has fragment changes
        window.addEventListener("hashchange", this.render.bind(this));
    }

    activeRoute() {
        // gets name of current active route without the #
        const componentName = window.location.hash.slice(1);
        return this.routes[componentName];
    }

    clear() {
        this.node.innerHTML = "";
    }   

    render() {
        // clears anything leftover from previous route
        this.clear();
        // gets current component
        const component = this.activeRoute();
        if (component) {
            const container = component.render();
            this.node.appendChild(container);
        }
    }
}

export default Router;