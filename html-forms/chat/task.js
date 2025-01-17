const chat = document.querySelector(".chat-widget");
const widget = document.querySelector(".chat-widget__side");
const inputField = document.getElementById("chat-widget__input");
const messages = document.getElementById("chat-widget__messages");

widget?.addEventListener("click", () => {
  chat.classList.add("chat-widget_active");
});

const randomRobotMessages = [
  "Все операторы заняты. Ждите, Вас обязательно обслужат!",
  "Привет и пока!",
  "А кому сейчас легко?!",
  "Напишите нам потом когда-нибудь!",
  "Отвечаю как могу",
  "Ой, не знаю что Вам ответить!",
  "У нас обед! Никого нет!",
];

function getRandomIndex() {
  return Math.floor(Math.random() * randomRobotMessages.length);
}

inputField?.addEventListener("keyup", (e) => {
  if (inputField.value.trim() && e.key === "Enter") {
    const currentTime = new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
    // Сообщение от клиента
    messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${currentTime}</div>
      <div class="message__text">${inputField.value}</div>
    </div>
    `;

    // Сообщение от робота
    messages.innerHTML += `
    <div class="message">
      <div class="message__time">${currentTime}</div>
      <div class="message__text">${randomRobotMessages[getRandomIndex()]
      }</div>
    </div>
    `;
    inputField.value = "";
  }
});