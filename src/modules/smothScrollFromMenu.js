const smothScrollFromMenu = () => {
    const btnScroll = document.querySelector('#btnScroll');
    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('ul>li');
    const getPosition = (elem) => {
        return document.documentElement.scrollTop + elem.getBoundingClientRect().y;
    };
    const scrollToTarget = (e) => {
        let target = e.target;
        // target = target.closest('.test');
        let targetId = target.getAttribute('to');
        if (target) {
            const targetTo = document.getElementById(targetId.substring(1, targetId.length));
            const targetPosition = getPosition(targetTo);
            const offsetTargetPosition = targetPosition;
            window.scrollTo({
                top: offsetTargetPosition,
                behavior: 'smooth'
            });
        }
    };

    btnScroll.addEventListener('click', scrollToTarget);
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', scrollToTarget);
    }

    const scrollFromBtn = (e) => {
        let target = e.target;
        target = target.closest('.test');
        let targetId = target.getAttribute('to');
        if (target) {
            const targetTo = document.getElementById(targetId.substring(1, targetId.length));
            const targetPosition = getPosition(targetTo);
            const offsetTargetPosition = targetPosition;
            window.scrollTo({
                top: offsetTargetPosition,
                behavior: 'smooth'
            });
        }
    };

    btnScroll.addEventListener('click', scrollFromBtn);
};

export default smothScrollFromMenu;

