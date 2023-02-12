/*Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories,
то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories,
найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
и количество элементов в категории (всех вложенных в него <li>).

В результате, в консоли будут выведены такие сообщения.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/

const categories = document.querySelector('ul#categories');
const items = document.querySelectorAll('li.item');
console.log('Number of categories: ', categories.children.length);

items.forEach(function (item) {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li').length;
  console.log('Category: ' + title);
  console.log('Elements: ' + elements);
});
