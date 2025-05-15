/* Deezer JS 
    Coded by : Arthur DESMONTS
*/

document.addEventListener('DOMContentLoaded', () => {
    /**
     * Animation on cursor for the hifi svg
     */
    const section = document.querySelector('.animated-h2-section');
    const paths = document.querySelectorAll('.swirly-visual path');

    section.addEventListener('mousemove', (e) => {
        const { clientX } = e;
        const { left, width } = section.getBoundingClientRect();
        
        const x = ((clientX - left) / width - 0.5) * 2;

        paths.forEach(path => {
            const dragRatio = path.style.getPropertyValue('--drag-ratio');
            const moveX = x * 1000 * dragRatio;
            
            path.style.transform = `translateX(${moveX}px)`;
        });
    });

    section.addEventListener('mouseleave', () => {
        paths.forEach(path => {
            path.style.transform = 'translate(0, 0)';
        });
    });


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
    