const btn = document.querySelector(".logInButton"); 
const menu = document.querySelector(".loginframe");
let isMenuShowed = false;

btn.addEventListener('click', () => { 
    if (isMenuShowed === false) {
        menu.style.backgroundColor = 'rgba(22, 22, 22, 1)';
        isMenuShowed = true;
    } else {
        menu.style.backgroundColor = 'rgba(22, 22, 22, 0)';
        isMenuShowed = false;
    }   
});
