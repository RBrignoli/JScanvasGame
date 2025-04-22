
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');

function appendMessage(content, sender) {
    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.textContent = content;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
function closeChat(){
    document.querySelector('.chatbot-container').style.display='none'
}
function openChat(){
    var ws = new WebSocket("ws://localhost:8000/ws");
    document.querySelector('.chatbot-container').style.display='flex'    
    ws.onmessage = (event) => {
        appendMessage(event.data || 'No response', 'bot');
    }
}

function sendMessage(event) {
    const message = userInput.value.trim();
    if (!message) return;
    appendMessage(message, 'user');
    userInput.value = '';
    try{
        ws.send(message)
    } catch (error) {
        console.log(error)
        appendMessage('Error sending message.', 'bot');
    }
}