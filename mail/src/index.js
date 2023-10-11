import Router from "./router";
import Inbox from "./inbox";
import Sent from "./sent";
import Compose from "./compose";

const routes = {
    inbox: Inbox,
    sent: Sent,
    compose: Compose
}

document.addEventListener("DOMContentLoaded", () => {
    window.location.hash = "inbox";

    const content = document.querySelector(".content");
    const contentRouter = new Router(content, routes);
    contentRouter.start();
    
    const sidebarNav = document.querySelector(".sidebar-nav");
    sidebarNav.addEventListener("click", (e) => {
        if (e.target.matches("a, button")) {
            const location = e.target.innerText.toLowerCase();
            window.location.hash = location;
        }
    })
})