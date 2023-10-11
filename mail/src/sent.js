import MessageStore from "./message_store";

const Sent = {
    render: () => {
        const container = document.createElement("ul");
        container.className = "messages";
        const sentMessages = MessageStore.getSentMessages();
        sentMessages.forEach(message => {
            const messageNode = Sent.renderMessage(message);
            container.appendChild(messageNode);
        })
        return container;
    },
    renderMessage: message => {
        const liMessage = document.createElement("li");
        liMessage.className = "message";
        liMessage.innerHTML = `
        <span class="to">To: ${message.to}</span>
        <span class="subject">${message.subject}</span>
        <span class="body">${message.body}</span>
        `;
        return liMessage;
    }
}

export default Sent;