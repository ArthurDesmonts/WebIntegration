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

});