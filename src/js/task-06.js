
const input = document.querySelector('#validation-input');
const lengthEl = input.getAttribute('data-length');

input.addEventListener('blur', validation);

     
function validation () {
    if (Number(lengthEl) === input.value.length){
    input.classList.add('valid')
   }
       
     else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}


// переключается лишь 1 цвет, не пойму как сделать второй