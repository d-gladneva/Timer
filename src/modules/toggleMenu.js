const toggleMenu = () => {
    const menu = document.querySelector('menu');
    const body = document.querySelector('body');
    const btnMenu = document.querySelector('.menu');
    const closeBtn = document.querySelector('.close-btn');
    const activeMenu = document.querySelector('.active-menu');
    const container = document.querySelector('.container');
    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    // btnMenu.addEventListener('click', handlerMenu);
    // // closeBtn.addEventListener('click', handlerMenu);
    // // menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
    // menu.addEventListener('click', (e) => {
    //     let target = e.target;
    //      if (target.className === 'close-btn'){
    //          menu.classList.toggle('active-menu');
    //          console.log(target);
    //      } else {
    //         target = target.closest('a');
    //         console.log(target);
    //         menu.classList.toggle('active-menu');
    //     }
    // });

    // усложненное с 1 обработчиком

    body.addEventListener('click', (e) => {
        let target = e.target;
        if (!menu.classList.contains('active-menu')) {
            target = target.closest('.menu');
            if (target) {
                menu.classList.toggle('active-menu');
            }
        } else if (menu.classList.contains('active-menu')) {
            if (target.classList.contains('test')){
                return;
            }
            if (!target.classList.contains('active-menu')) {
                menu.classList.remove('active-menu');
            } else if (target.classList.contains('close-btn'))
                menu.classList.remove('active-menu');
        }

    });

};

export default toggleMenu;
