// Для запуска сервера необходимо выполнить команду в терминале node start
// Для того, чтобы при внесении изменений не приходилось каждый раз перезапускать сервер,
// установим пакет nodemon. Для этого выполним команду:  npm install nodemon --save-dev
// или же команду: npm i nodemon -dev
// Теперь сервер можно запускать при помощи команды: dev, предварительно добавив её в скрипты package.json
//
const express = require("express"); // Подключаем модуль express
const dotenv = require("dotenv"); //Подключаем модуль dotenv
const userRouter = require("./routes/users"); //Подключаем модуль с роутами для user

dotenv.config(); //Вызываем функцию конфигурации

const app = express(); //Вызываем конструктор?
const { PORT, API_URL } = process.env;

const helloWorldPost = (req, resp) => {
  resp.status(200);
  resp.send("Hello, World Post!");
};

app.get("/", (request, response) => {
  //Методы аргумента response управляют отправкой ответа
  // Основные методы:
  // status(value): устанавливает статусный код value ответа
  // send('str'): устанавливает сообщение 'str', отправляемое вместе со статусным кодом

  response.status(200);
  response.send("Hello, World!");
}); //Для обработки GET запроса, используется метод app.get

app.post("/", helloWorldPost); //Для обработки POST запроса, используется метод app.post

// app.get("/users/:id", (req, resp) => {
//   const { id } = req.params;
//   resp.status(200);
//   resp.send(`User with id:`);
// });

app.use(userRouter); //Для обработки запросов, описанных в другом модуле, используется метод app.use

app.listen(process.env.PORT, () => {
  console.log(`Сервер запущен по адресу по адресу ${API_URL}:${PORT}`);
}); //При помощи метода listen запускаем сервер
