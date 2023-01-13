const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

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

function onLoginSubmit(event) {
  event.preventDefault();
  // const username = loginInput.value;
  console.log(loginInput.value);
}

loginForm.addEventListener('submit', onLoginSubmit);