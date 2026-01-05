const menuCover = document.querySelector('.sp-cover');
const menu = document.querySelectorAll('.sp-menu > li');
const backToMenu = document.querySelector('.sp-back-to-menu');
const originalImage = document.querySelector('#sp-original-image');
const showOriginalBtn = document.querySelector('#sp-show-original-btn');
const screen = document.querySelector('#sp-screen');

let level;
const images = ['space', 'veges'];
let selectedImage;
const levelMap = {
  easy: { grid: 'auto auto', size: 2 },
  medium: { grid: 'auto auto auto', size: 3 },
  difficult: { grid: 'auto auto auto auto', size: 4 },
};

menu.forEach((item) => {
  item.addEventListener('click', () => {
    menuCover.classList.add('hide');
    level = item.dataset.level;
    screen.style.gridTemplateColumns = levelMap[level].grid;
    setOriginalImage();
  });
});

backToMenu.addEventListener('click', () => {
  menuCover.classList.remove('hide');
});

function setOriginalImage() {
  selectedImage = images[Math.floor(Math.random() * images.length)];
  originalImage.setAttribute(
    'src',
    `./images/slide_puzzle/${selectedImage}.png`
  );
}

showOriginalBtn.addEventListener('mouseover', () => {
  originalImage.classList.add('show');
});

showOriginalBtn.addEventListener('mouseleave', () => {
  originalImage.classList.remove('show');
});
