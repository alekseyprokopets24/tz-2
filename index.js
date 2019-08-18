const btnConsult = document.querySelector('#js-button-consult');
const btnVideo = document.querySelector('#js-button-video');
const popUpConsult = document.querySelector('.popup_form-consult');
const popUpVideo = document.querySelector('.popup_form-video');
const btnClosePopupConsult = document.querySelector('.form_close');
const btnClosePopupVideo = document.querySelector('.popup_form-video');
const btnShowMenu = document.querySelector('.menu-icon__button');
const headerNav = document.querySelector('.header__nav');

btnConsult.addEventListener('click', showPopupConsult);
btnClosePopupConsult.addEventListener('click', closePopupConsult);
btnVideo.addEventListener('click', showPopupVideo);
btnClosePopupVideo.addEventListener('click', closePopupVideo);
btnShowMenu.addEventListener('click', showHeaderMenu);

function showPopupConsult(){
    popUpConsult.classList.remove("hidden");
}

function closePopupConsult(){
    popUpConsult.classList.add("hidden");
}

function showPopupVideo(){
    popUpVideo.classList.remove("hidden");
}

function closePopupVideo(){
    popUpVideo.classList.add("hidden");
}
function showHeaderMenu(){
    headerNav.classList.toggle('show-menu');
}



