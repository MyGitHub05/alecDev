
getScreenForBurgerMenu();
// get screen size and add classname for burger menu
function getScreenForBurgerMenu(){
    const screenSize = window.innerWidth;
    const list = document.querySelectorAll('li');
    const nav = document.getElementById('nav');
    if(screenSize < 1073){
        nav.className = 'burger_menu';
        list.forEach(li => {
            li.classList.add("navItem");
        });
    }
}