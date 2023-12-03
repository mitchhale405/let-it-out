// Initialize Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function startChat() {
  const chatButton = document.getElementById("chatButton");
  const chatContainer = document.getElementById("chatContainer");
  const messagesContainer = document.getElementById("messages");

  // Display chat container
  chatContainer.style.display = "block";
  chatButton.style.display = "none";

  // Listen for incoming messages
  database.ref("messages").on("child_added", (snapshot) => {
    const data = snapshot.val();
    messagesContainer.innerHTML += `<p>${data.user}: ${data.message}</p>`;
  });
}

function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const messagesContainer = document.getElementById("messages");

  const message = messageInput.value;
  if (message.trim() !== "") {
    // Send the message to Firebase
    const newMessageRef = database.ref("messages").push();
    newMessageRef.set({ user: "You", message });
    messageInput.value = "";
  }
}
