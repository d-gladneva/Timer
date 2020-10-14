const togglePopUp = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popupContent = document.querySelector('.popup-content');
    const popupClose = document.querySelector('.popup-close');
    let count = 0;
    let animateInterval;
    popupBtn.forEach(elem => elem.addEventListener('click', () => {
        animateInterval = requestAnimationFrame(animatePopUp);
        count = 0;
        popup.style.display = 'block';
    }));

    popup.addEventListener('click', (e) => {
        let target = e.target;

        if (target.className === 'popup-close') {
            popup.style.display = 'none';
            count = 0;
            popup.style.top = '0';
        } else {
            target = target.closest('.popup-content');

            if (!target) {
                popup.style.display = 'none';
                count = 0;
                popup.style.top = '0';
            }
        }
    });
    let animatePopUp = () => {
        animateInterval = requestAnimationFrame(animatePopUp);
        count++;
        if (document.documentElement.clientWidth > 768) {
            if (count < 50) {
                popupContent.style.top = count * 5 + 'px';
            } else cancelAnimationFrame(animateInterval)
        } else cancelAnimationFrame(animateInterval);
    };
    animateInterval = requestAnimationFrame(animatePopUp);

    // popupClose.forEach(elem => elem.addEventListener('click', () => {
    //     popup.style.display = 'none';
    //
    // }));
};

export default togglePopUp;

