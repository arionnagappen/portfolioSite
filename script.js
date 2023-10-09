const getElement = (selector) => {
    let element = document.querySelector(selector);

    return element;
}


// ROTATE MENU ICON ON SMALL SCREENS
const menuButton = getElement('.menu-btn');
const menuItems = getElement('.nav-menu');
let rotateAngle = 0;

menuButton.addEventListener('click', function(){

    if (rotateAngle != 90) {
        rotateAngle += 90;

        menuButton.style.transform = `rotate(${rotateAngle}deg)`

    } else {
        menuButton.style.transform = `rotate(0deg)`
        rotateAngle = 0;
    }

    menuItems.classList.toggle('show-items');    
});