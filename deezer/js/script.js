/* Deezer JS 
    Coded by : Arthur DESMONTS
*/

/**
 * Header deploy full screen on phone format
 */
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.main-header');
    const burgerIcon = document.querySelector('.burger-icon');
    const burgerLines = burgerIcon.querySelectorAll('.burger-line');
    let isMenuOpen = false;

    burgerIcon.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            menu.classList.add('menu-fullscreen');
            document.body.style.overflow = 'hidden';
            burgerLines[0].style.transform = 'translateY(10px) rotate(45deg)';
            burgerLines[1].style.opacity = '0';
            burgerLines[2].style.transform = 'translateY(-10px) rotate(-45deg)';
        } else {
            menu.classList.remove('menu-fullscreen');
            document.body.style.overflow = 'auto';
            burgerLines[0].style.transform = 'none';
            burgerLines[1].style.opacity = '1';
            burgerLines[2].style.transform = 'none';
        }
    });
});