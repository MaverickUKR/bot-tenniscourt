const TelegramAPI = require("node-telegram-bot-api");

const token = "7186933081:AAFTJWUvHghagjKplknbUQlHGdMU_DrLg_w";

const bot = new TelegramAPI(token, { polling: true });

const start = () => {
  bot.setMyCommands([
    { command: "/start", description: "Привітання" },
    { command: "/schedule", description: "Розклад занять на корті" },
    { command: "/location", description: "Місцезнаходження корту" },
    { command: "/price", description: "Вартість оренди корту" },
    { command: "/rent", description: "Онлайн оренда корту" },
    { command: "/info", description: "Список доступних команд" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name;
    const lastName = msg.from.last_name;
    // console.log(msg);
    // bot.sendMessage(chatId, `Ви написали мені "${text}"`);

    if (text === "/start") {
      return bot.sendMessage(
        chatId,
        `Вітаю Вас, ${firstName} ${lastName}! Мене звуть Roger, я тут, щоб відповісти на Ваші питання про Тенісний корт на Чайці. Щоб отримати список всіх доступних команд напишіть /info`
      );
    }
    if (text === "/schedule") {
      return bot.sendMessage(
        chatId,
        `Вітаю Вас, ${firstName} ${lastName}! Ви можете подивитись розклад занять на тенісному корті за цим посиланням 📅 https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FKiev&bgcolor=%23ffffff&mode=WEEK&src=dGVubmlzLmNvdXJ0LmNoYXlrYUBnbWFpbC5jb20&src=MTQzMjBmNTY4MTNhYzA2MWI2NGFhZWJlOGE3MTdjNWE1ZjcxMDZmMTk5YTYzZDMzYjQyYzhiMWZlODJhOWM1OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043`
      );
    }
    if (text === "/location") {
      return bot.sendMessage(
        chatId,
        `Вітаю Вас, ${firstName} ${lastName}! Тенісний корт знаходиться за адресою: Київська область, Бучанський район, вул. Винниченка 1. Google Maps: https://maps.app.goo.gl/xZLYUcsXwoZiWpcb8`
      );
    }
    if (text === "/price") {
      return bot.sendMessage(
        chatId,
        `"Вітаю Вас, ${firstName} ${lastName}! Вартість оренди тенісного корту становить 300 грн/год. В будні з 12:00 до 16:00 діє знижка 30%"`
      );
    }
    if (text === "/rent") {
      return bot.sendMessage(
        chatId,
        `Вітаю Вас, ${firstName} ${lastName}! Ви можете орендувати тенісний корт онлайн, для цього перейдіть за посиланням https://n816159.alteg.io`
      );
    }
    if (text === "/info") {
      return bot.sendMessage(
        chatId,
        `Вітаю Вас, ${firstName} ${lastName}! Список доступних команд: /start /schedule /location /price /rent`
      );
    }
    return bot.sendMessage(
      chatId,
      "Команда не розпізнана, введіть команду зі переліку /info"
    );
  });
};
start();
