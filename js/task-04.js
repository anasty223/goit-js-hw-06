// Счетчик состоит из спана и кнопок,
//которые, при клике, должны увеличивать 
//и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const btnDecrement = document.querySelector("[data-action='decrement']");
const btnIncrement = document.querySelector("[data-action='increment']");
const value = document.querySelector("#value");

let counterValue = 0;

btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
    console.log('-click')
})
btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
    console.log('+click')
})


// Создай переменную counterValue в которой будет
// храниться текущее значение счетчика и инициализируй 
//её значением 0.
// Добавь слушатели кликов на кнопки,
// внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.