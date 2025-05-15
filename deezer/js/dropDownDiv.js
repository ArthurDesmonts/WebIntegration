/* Deezer JS 
    Coded by : Arthur DESMONTS
*/

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.faq-section');
    const divs = section.querySelectorAll('.div-drop-down');

    divs.forEach(child => {
        child.querySelector('.drop-title').addEventListener('click', () => {
            const faqMore = child.querySelector('.faq-more');
            const faqClose = child.querySelector('.faq-close');
            const hiddenContent = child.querySelector('.div-content-hided');

            if (faqMore.classList.contains('hide')) {
                faqMore.classList.remove('hide');
                faqClose.classList.add('hide');
                hiddenContent.classList.add('hide');
            } else {
                faqMore.classList.add('hide');
                faqClose.classList.remove('hide');
                hiddenContent.classList.remove('hide');
            }
        });
    });
});