const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listEl = document.querySelector('.gallery');
const galleryEl = images
  .map((image) => `<li><img src="${image.url}" alt="${image.alt}"></li>`)
  .join('');
listEl.insertAdjacentHTML('beforeend', galleryEl);

listEl.style.cssText = `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding-left: 0;
  list-style: none;
`;

const itemsImg = document.querySelectorAll('img');
itemsImg.forEach((itemImg) => {
  itemImg.classList.add('gallery__img');
});

const galleryImgs = document.querySelectorAll('.gallery__img');
galleryImgs.forEach((galleryImg) => {
  galleryImg.style.cssText = `
width: 400px;
height: 250px;
`;
});
