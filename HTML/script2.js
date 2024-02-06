// Bot responses
const botResponses = {
  "hi": "Hello!",
  "how are you?": "I'm just a bot, but thanks for asking!",
  "what's your name?": "I dont have a name you thought i had one!",
  "bye": "Goodbye! Have a great day!",
  "islamic months": "The Islamic months are: Muharram, Safar, Rabi' al-Awwal, Rabi' al-Thani, Jumada al-Awwal, Jumada al-Thani, Rajab, Sha'ban, Ramadan, Shawwal, Dhu al-Qi'dah, Dhu al-Hijjah",
  "goodbye": "Goodbye! Have a great day!",
  "info": "These are all the commands:",
};
// Function to send user message and get bot response
function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") return; // Ignore empty messages
  displayMessage(userInput, "user-message");
  const botResponse = getBotResponse(userInput.toLowerCase().trim());
  displayMessage(botResponse, "bot-message");
  document.getElementById("user-input").value = ""; // Clear input field
}

// Function to get bot response based on user input
function getBotResponse(userInput) {
  console.log("User Input:", userInput); // Debugging output
  if (botResponses.hasOwnProperty(userInput)) {
    return botResponses[userInput];
  } else {
    return "I'm sorry, I don't understand that.";
  }
}

  