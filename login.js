const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// 내가 작성한 코드
// function onLoginBtnClick() {
//   if (loginInput.value === "") {
//     console.log("Text your name.");
//   } else if (loginInput.value.length > 20) {
//     console.log("Your name is too long.");
//   } else {
//     console.log("Hello " + loginInput.value);
//   }
// }

function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener('click', onLoginBtnClick);