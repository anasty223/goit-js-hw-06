// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
    
  const elementEl = event.currentTarget;
  const mail = elementEl.email.value;
  const password = elementEl.password.value;

  if (mail === "" || password === "") {
    return alert("не заполнены все поля");
  } else {
    const formEl = {
      mail, password
       
    }
    console.log(formEl)
    event.currentTarget.reset();
  }
}

// ==================================================

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
