// Simulating a simple user pool
const users = ["User1", "User2", "User3", "User4", "User5"];

function startChat() {
  const chatButton = document.getElementById("chatButton");
  const chatContainer = document.getElementById("chatContainer");
  const messagesContainer = document.getElementById("messages");
  const messageInput = document.getElementById("messageInput");

  // Get a random user from the pool
  const randomUser = getRandomUser();

  // Display chat container and user info
  chatContainer.style.display = "block";
  chatButton.style.display = "none";

  messagesContainer.innerHTML = `<p>Connected with ${randomUser}</p>`;

  // Simulate messages
  const messages = [
    `${randomUser}: Hi there!`,
    'You: Hello!',
    `${randomUser}: How are you?`,
    'You: I am doing well, thanks!',
  ];

  // Display simulated messages
  messages.forEach(message => {
    messagesContainer.innerHTML += `<p>${message}</p>`;
  });
}

function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const messagesContainer = document.getElementById("messages");

  const message = messageInput.value;
  if (message.trim() !== "") {
    messagesContainer.innerHTML += `<p>You: ${message}</p>`;
    messageInput.value = "";
  }
}

function getRandomUser() {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
}