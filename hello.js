//Программа авторизации. Создаётся массив users, в котором каждый элемент – это объект типа “пользователь” со свойствами “имя”, “логин” и “пароль”. Программа запрашивает у пользователя логин и пароль при помощи prompt, после чего проходит по массиву users и ищет в нём объект с такими же значениями. Если пользователь найден в массиве users, то программа здоровается с ним по имени. В противном случае появляется ошибка авторизации.
let users = [
  {
    name: 'Иванов',
    login: 'ivanov',
    password: 111
  },
  {
    name: 'Петров',
    login: 'petrov',
    password: 222
  },
  {
    name: 'Сидоров',
    login: 'sidorov',
    password: 333
  }
];

let userLogin = prompt('Введите логин', '');

let userPassword = prompt('Введите пароль', '');

let user = users.find(item => item.login == userLogin && item.password == userPassword);

function checkLogin() {
  let i = 0;

  while (i < users.length) {
    if (userLogin == null) {
      alert ('До свидания!');
        break;
    }
    else if (user == undefined) {
        alert('Ошибка ввода');
        break;
    }
    else if (userLogin == users[i].login) {
      alert ('Здравствуйте, ' + users[i].name);
    }
    i++;
  }
}
checkLogin();