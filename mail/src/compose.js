import MessageStore from "./message_store";

const Compose = {
    render: () => {
        const container = document.createElement("div");
        container.className = "new-message";
        container.innerHTML = Compose.renderForm();

        container.addEventListener("change", (e) => {
            const field = e.target.name;
            const value = e.target.value;
            debugger;
            MessageStore.updateDraftField(field, value);
        })

        container.addEventListener("submit", (e) => {
            e.preventDefault();

            MessageStore.sendDraft();
            window.location.hash = "inbox";
        })

        return container;
    },
    renderForm: () => {
        const messageDraft = MessageStore.getMessageDraft();
        return `
        <p class="new-message-header">New Message</p>
        <form class="compose-form">
            <input 
                placeholder="Recipient"
                name="to" 
                type="text" 
                value=${messageDraft.to || ""}
            >
            <input 
                placeholder="Subject" 
                name="subject" 
                type="text" 
                value=${messageDraft.subject || ""}
            >
            <textarea name="body" rows="20">${messageDraft.body || ""}</textarea>
            <button type="submit" class="btn btn-primary submit-message">Send</button>
        </form>`
    }
}

export default Compose;