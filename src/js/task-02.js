
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients);

const ingridients = document.querySelector('#ingredients');

const array = ingridientsEl => {
return ingridientsEl.map(ingredient => {
    
  const li = document.createElement('li');
  li.textContent = ingredient;
  
 li.classList.add('items');
   return li
  });
}
const arrayEl = array(ingredients);
ingridients.append(...arrayEl);

 