window.addEventListener('DOMContentLoaded', () => {
    //Timer
    const countTimer = (deadLine) => {
        let timerHours = document.querySelector('#timer-hours');
        let timerMinutes = document.querySelector('#timer-minutes');
        let timerSeconds = document.querySelector('#timer-seconds');

        const getTimeRemaining = () => {
            let dateStop = new Date(deadLine).getTime();
            let dateNow = new Date().getTime();
            let timeRemaining = (dateStop - dateNow) / 1000;
            let seconds = Math.floor(timeRemaining % 60);
            let minutes = Math.floor((timeRemaining / 60) % 60);
            let hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining, hours, minutes, seconds};

        };

        const upDateClock = () => {
            let timer = getTimeRemaining();

            timerHours.textContent = timer.hours;
            if (timer.hours < 10) {
                timerHours.textContent = '0' + timer.hours;
            }
            timerMinutes.textContent = timer.minutes;
            if (timer.minutes < 10) {
                timerMinutes.textContent = '0' + timer.minutes;
            }
            timerSeconds.textContent = timer.seconds;
            if (timer.seconds < 10) {
                timerSeconds.textContent = '0' + timer.seconds;
            }
            if (timer.timeRemaining > 0) {
                let timeOut = setTimeout(upDateClock, 1000);
            } else {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                clearTimeout(timeOut);
            }
        };

        upDateClock();
    };

    countTimer('01 october 2020');
    // let calcDate = setInterval(countTimer, 1000, '01 october 2020');

    // меню
    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('ul>li');
    const body = document.querySelector('body');
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu');
        const closeBtn = document.querySelector('.close-btn');
        const activeMenu = document.querySelector('.active-menu');
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
            if (target.className === 'active-menu') return;
            if (target.className === 'close-btn'){
                menu.classList.toggle('active-menu');
                console.log(target);
            } else {
                target = target.closest('a');
                console.log(target);
                menu.classList.toggle('active-menu');
            }
        });


    };
    toggleMenu();

    // popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const popupContent = document.querySelector('.popup-content');
        const popupClose = document.querySelector('.popup-close');
        let count = 0;
        let animateInterval;
        popupBtn.forEach(elem => elem.addEventListener('click', () => {
            popup.style.display = 'block';
        }));

        // popupClose.addEventListener('click', () => {
        //     popup.style.display = 'none';
        // });

        popup.addEventListener('click', (e) => {
            let target = e.target;

            if (target.className === 'popup-close') {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                console.log(target);

                if (!target) {
                    popup.style.display = 'none';
                }
            }
        });
        let animatePopUp = () => {
            animateInterval = requestAnimationFrame(animatePopUp);
            count++;
            if (document.documentElement.clientWidth > 768) {
                if (count < 250) {
                    popupContent.style.top = count + 'px';
                } else cancelAnimationFrame(animateInterval)
            } else cancelAnimationFrame(animateInterval);
        };
        animateInterval = requestAnimationFrame(animatePopUp);
    };

    togglePopUp();

    // scroll

    const getPosition = (elem) => {
        return document.documentElement.scrollTop + elem.getBoundingClientRect().y;
    };

    const scrollToTarget = (e) => {
        const targetId = e.target.getAttribute('to');
        console.log(targetId);
        const target = document.getElementById(targetId.substring(1, targetId.length));
        console.log(target);
        const targetPosition = getPosition(target);
        const offsetTargetPosition = targetPosition;

        window.scrollTo({
            top: offsetTargetPosition,
            behavior: 'smooth'
        });
    };

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', scrollToTarget);
    }

    // табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header');
        const tab = tabHeader.querySelectorAll('.service-header-tab');
        const tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (e) => {
            let target = e.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }

        });
    };

    tabs();

});