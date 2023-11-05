//Описываем роуты
const router = require("express").Router();

const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/users"); //Подключаем функции контроллеры

//Описываем роуты
router.get("/users", getUsers);
router.get("/users/:user_id", getUser);
router.post("/users", createUser);
router.patch("/user/:user_id", updateUser);
router.delete("/user/:user_id", deleteUser);

module.exports = router;
