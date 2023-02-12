const categories = document.querySelector('ul#categories');
const items = document.querySelectorAll('li.item');
console.log('Number of categories: ', categories.children.length);

items.forEach(function (item) {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li').length;
  console.log('Category: ' + title);
  console.log('Elements: ' + elements);
});
