/* eslint-disable no-multiple-empty-lines */
const fileNames = ['fox.jpg', 'raccoon.jpg', 'wolf.jpg'];
const animalsName = ['Лиса', 'Енот', 'Волк'];
const description = {
    fox: 'Лиса Лиса Лиса sit, amet consectetur adipisicing elit. Exercitationem dignissimos repudiandae magnam nesciunt fugit libero facere optio quae! Quasi quas, sed nam tempora corrupti sapiente illum dolor est labore cum.',
    raccoon: 'Енот Енот Енот sit, amet consectetur adipisicing elit. Exercitationem dignissimos repudiandae magnam nesciunt fugit libero facere optio quae! Quasi quas, sed nam tempora corrupti sapiente illum dolor est labore cum.',
    wolf: 'Волк Волк Волк sit, amet consectetur adipisicing elit. Exercitationem dignissimos repudiandae magnam nesciunt fugit libero facere optio quae! Quasi quas, sed nam tempora corrupti sapiente illum dolor est labore cum.'
}

// массив с текстовым описанием
const descriptionArr = [description.fox, description.raccoon, description.wolf];

// путь к изображениям
const imgPath = 'img/';

// перем. для записи ссылок на объекты
let select = null;
let text = null;
let image = null;

window.addEventListener('load', () => {
    select = document.querySelector('.select');
    image = document.querySelector('.mypict');
    text = document.getElementsByTagName('p')[0];

    // формирование раскрывающ. списка
    for (let i = 0; i < animalsName.length; i++) {
        select.options[i] = new Option(animalsName[i], `${[animalsName[i]]}`);
    }

    select.addEventListener('change', () => {
        // selectedIndex --> порядковый номер первого выбранного элемента <option>
        image.src = imgPath + fileNames[select.selectedIndex];
        image.title = select.value;
        text.innerHTML = descriptionArr[select.selectedIndex];
    });

    // значения по умолчанию
    let isSelected = 0;
    select.options[isSelected].selected = true;
    image.src = imgPath + fileNames[isSelected];
    image.title = select.value;
    text.innerHTML = descriptionArr[isSelected];

});
