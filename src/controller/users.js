// Функции контроллеры

const getUsers = (request, response) => {
  //GET all users
  response.status(200);
  response.send(`GET all users`);
};

const getUser = (request, response) => {
  const { user_id } = request.params; //Получаем параметр из роута
  response.status(200);
  response.send(`User with id:${user_id}`);
};

const createUser = (request, response) => {
  //create new user
};

const updateUser = (request, response) => {
  //update user
};

const deleteUser = (request, response) => {
  //delete user
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}; //Экспортируем данные функции ля испльзования в роутах
