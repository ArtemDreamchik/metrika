const ACTIVE_SLIDE_CLASSNAME = 'flat__active';

// Собираем все слайды
const slidesNodes = Array.from(document.querySelectorAll('.flat__bg1, .flat__bg2, .flat__bg3, .flat__bg4'));

// Кнопки
const prevButtonNode = document.querySelector('.move-left_img');
const nextButtonNode = document.querySelector('.move-right_img');

let activeId = 0;

// Инициализация
function init() {
    slidesNodes[0].classList.add(ACTIVE_SLIDE_CLASSNAME);

    prevButtonNode.addEventListener('click', () => {
        setActiveSlideById(getPrevId());
    });

    nextButtonNode.addEventListener('click', () => {
        setActiveSlideById(getNextId());
    });
}

init();

// Установка активного слайда
function setActiveSlideById(id) {
    slidesNodes[activeId].classList.remove(ACTIVE_SLIDE_CLASSNAME);
    activeId = id;
    slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME);
}

function getPrevId() {
    return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
}

function getNextId() {
    return activeId === slidesNodes.length - 1 ? 0 : activeId + 1;
}
