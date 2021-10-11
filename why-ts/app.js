// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} city
 * @property {string} street
 */

/**
 * @typedef {object} User
 * @property {string} email
 * @property {string} name
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
const fetchUser = () => {
  return axios.get(url);
};

function startApp() {
  fetchUser()
    .then(function (response) {
      // console.log(response);
      // user = response.data[0];
      console.log(user);
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = response.name;
      email.innerText = response.email;
      address.innerText = response.address.city;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
