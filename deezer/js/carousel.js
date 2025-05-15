/* Deezer JS 
    Coded by : Arthur DESMONTS
*/

document.addEventListener('DOMContentLoaded', () => {
    /**
     * Animation for the carousel hover -> hidding or set visible <a> associated
     */
    const containers = document.querySelectorAll('.individual-image-container');
    
    containers.forEach(container => {
        container.addEventListener('mouseover', () => {
            const associatedLink = container.querySelector('.a-grid');
            containers.forEach(otherContainer => {
                associatedLink.style.visibility = 'visible';

                if (otherContainer !== container) {
                    otherContainer.style.filter = 'brightness(0.5)';
                    otherContainer.style.transition = 'filter 0.3s ease';
                }
            });
        });

        container.addEventListener('mouseout', () => {
            const associatedLink = container.querySelector('.a-grid');
            associatedLink.style.visibility = 'hidden';

            containers.forEach(otherContainer => {
                otherContainer.style.filter = 'brightness(1)';
            });
        });
    });
});