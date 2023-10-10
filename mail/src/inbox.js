import MessageStore from "./message_store";

const Inbox = {
    render: () => {
        const container = document.createElement("ul");
        container.className = "messages";
        const inboxMessages = MessageStore.getInboxMessages();
        inboxMessages.forEach(message => {
            const messageNode = Inbox.renderMessage(message);
            container.appendChild(messageNode);
        })

        return container;
    },
    renderMessage: message => {
        const liMessage = document.createElement("li");
        liMessage.className = "message";
        liMessage.innerHTML = `
        <span class="from"> ${message.from} </span>
        <span class="subject"> ${message.subject} </span>
        <span class="body"> ${message.body} </span>
        `;
        return liMessage;
    }
}

export default Inbox;