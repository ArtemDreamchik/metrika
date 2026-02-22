const POPUP_OPENED_CLASSNAME = 'popup_open';
const BODY_FIXED_CLASSNAME = 'body_fixed';

const bodyNode = document.querySelector('body');
const popupNode = document.querySelector('.js-popup');
const btnOpenNode = document.querySelector('.js-btn');
const popupContentNode = document.querySelector('.js-popup__content');
const btnCloseNode = document.querySelector('.js-popup__close-btn');

btnOpenNode.addEventListener('click', openPopup);
btnCloseNode.addEventListener('click', (event) => {
    event.stopPropagation();
    closePopup();
});

popupNode.addEventListener('click', (event) => {
    if (!popupContentNode.contains(event.target)) {
        closePopup();
    }
});

function openPopup() {
    popupNode.classList.add(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.add(BODY_FIXED_CLASSNAME);
}

function closePopup() {
    popupNode.classList.remove(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.remove(BODY_FIXED_CLASSNAME);
}
