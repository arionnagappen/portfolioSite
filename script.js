const getElement = (selector) => {
    let element = document.querySelector(selector);

    return element;
}

const menuButton = getElement('.menu-btn');
const menuItems = getElement('.nav-menu');

menuButton.addEventListener('click', function(){
    menuItems.classList.toggle('show-items');
})