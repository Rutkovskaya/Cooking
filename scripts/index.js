const cardTemplate = document.querySelector('.card-template');
const cardContainer = document.querySelector('.photo-grid');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-btn');

const initialCards = [
    {
        name: 'Архыз',
        scr: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        scr: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    }
];

//открыватор попапчиков
function popupOpened(el) {
    el.classList.add('popup_opened');
}

//закрыватор попапчиков
function popupСlose(el) {
    el.classList.remove('popup_opened');
}


//Рендрим карточку
function createCard(name, scr) {
    const newCard = cardTemplate.content.querySelector('.card').cloneNode(true);
    const cardText = newCard.querySelector('.card__text');
    const selectCard = newCard.querySelector('.card__image');
    //const likeButton = newCard.querySelector('.hart-button');

    cardText.textContent = name;
    selectCard.src = scr;
    selectCard.alt = name;

    //Лайкатор карточек
    // likeButton.addEventListener('click', () => {
    //     likeButton.classList.toggle('hart-button_activ');
    // });

    //Открыватор карточки
    selectCard.addEventListener('click', () => {
        popupOpened(popup);
    });

    return newCard;
}

//Добавляем карточки
initialCards.forEach(function (el) {
    cardContainer.append(createCard(el.name, el.scr));
});