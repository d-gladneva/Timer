window.addEventListener('DOMContentLoaded', () => {
    // анимация
    const animate = ({timing, draw, duration}) => {
        const start = performance.now();

        requestAnimationFrame(function newAnimate(time) {
            // timeFraction изменяется от 0 до 1
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) {
                timeFraction = 1;
            }

            // вычисление текущего состояния анимации
            const progress = timing(timeFraction);

            draw(progress); // отрисовать её

            if (timeFraction < 1) {
                requestAnimationFrame(newAnimate);
            }
        });
    };

    // проверка на валидацию

    const calcBlock = document.querySelector('.calc-block');
    const inputElems = calcBlock.querySelectorAll('input[type="text"]');
    const inputMails = document.querySelectorAll('input[name="user_email"]');
    const inputPhones = document.querySelectorAll('input[name="user_phone"]');
    const inputNames = document.querySelectorAll('input[name="user_name"]');
    const inputMessages = document.querySelectorAll('input[name="user_message"]');
    console.log(inputPhones);


    const checkValidInput = () => {
        for (let i = 0; i < inputElems.length; i++) {
            inputElems[i].value = inputElems[i].value.replace(/\D/g, '');
        }
    };

    // const checkValidInputMales = () => {
    //     for (let i = 0; i < inputMails.length; i++) {
    //         inputMails[i].value = inputMails[i].value.replace(/^\w+@\w+\.w{2,}$/, '');
    //         // if (inputMails[i].value !== /^\+?[78]([-()]*\d){10}$/) {
    //         //     alert('Введите верное значение!');
    //         //     inputMails[i].value = inputMails[i].value.replace(/\D/g, '');
    //         // }
    //
    //     }
    // };
    //
    // const checkValidInputPhones = () => {
    //     let checkPhone = /^\+?[78]([-()]*\d){10}$/;
    //     for (let i = 0; i < inputNames.length; i++) {
    //         inputNames[i].value = inputNames[i].value.replace(/^\+?[78]([-()]*\d){10}$/, '');
    //         let valid = checkPhone.test(inputNames[i].value);
    //     }
    // };
    //
    // const checkValidInputNames = () => {
    //     for (let i = 0; i < inputNames.length; i++) {
    //         inputNames[i].value = inputNames[i].value.replace(/[^а-яё\s]/ig, '');
    //     }
    // };
    //
    // const checkValidInputMessages = () => {
    //     for (let i = 0; i < inputMessages.length; i++) {
    //         inputMessages[i].value = inputMessages[i].value.replace(/[^а-яё\s]/ig, '');
    //     }
    // };

    // document.addEventListener('input', checkValidInputMales);
    // // document.addEventListener('input', checkValidInputPhones);
    // document.addEventListener('input', checkValidInputNames);
    // document.addEventListener('input', checkValidInputMessages);
    // calcBlock.addEventListener('input', checkValidInput);

    // смена картинок

    const command = document.getElementById('command');


    command.addEventListener('mouseover', (e) => {
        let target = e.target;
        if (target.classList.contains('command__photo')) {
            let dataSrcValue = target.getAttribute('src');
            target.src = target.dataset.img;
            target.setAttribute('data-img', dataSrcValue);
        }
    });

    command.addEventListener('mouseout', (e) => {
        let target = e.target;
        if (target.classList.contains('command__photo')) {
            let dataSrcValue = target.getAttribute('src');
            target.src = target.dataset.img;
            target.setAttribute('data-img', dataSrcValue);
        }
    });


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

    countTimer('31 december 2020');
    // let calcDate = setInterval(countTimer, 1000, '01 october 2020');

    // меню
    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('ul>li');
    const btnScroll = document.querySelector('#btnScroll');
    const body = document.querySelector('body');
    const toggleMenu = () => {
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
                if (!target.classList.contains('active-menu')) {
                    menu.classList.remove('active-menu');
                } else if (target.classList.contains('close-btn'))
                    menu.classList.remove('active-menu');
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

    togglePopUp();

// scroll

    const getPosition = (elem) => {
        return document.documentElement.scrollTop + elem.getBoundingClientRect().y;
    };

    const scrollToTarget = (e) => {
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

    btnScroll.addEventListener('click', scrollToTarget);

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

    const portfolioDots = document.querySelector('.portfolio-dots');

    const slide = document.querySelectorAll('.portfolio-item');

    const renderDots = (q) => {
        const li = `
            <li class="dot"></li>
        `;
        return li.repeat(q);
    };

    portfolioDots.insertAdjacentHTML('beforeEnd', renderDots(slide.length));

    //слайдер

    const slider = () => {
        const slider = document.querySelector('.portfolio-content');

        const btn = document.querySelectorAll('.portfolio-btn');
        const dot = document.querySelectorAll('.dot');

        const dotFirst = document.querySelector('.dot');
        dotFirst.classList.add('dot-active');

        let currentSlide = 0;
        let interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (e) => {
            e.preventDefault();

            let target = e.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (e) => {
            let target = e.target;
            if (target.matches('.portfolio-btn') || target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (e) => {
            let target = e.target;
            if (target.matches('.portfolio-btn') || target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(2000);
    };

    slider();

    // калькулятор

    const calc = (price = 100) => {
        const calcType = document.querySelector('.calc-type');
        const calcSquare = document.querySelector('.calc-square');
        const calcDay = document.querySelector('.calc-day');
        const calcCount = document.querySelector('.calc-count');
        const totalValue = document.getElementById('total');
        // calcSquare.setAttribute("required", "");

        const countSum = () => {
            let total = 0;
            let countValue = 1;
            let dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value;
            const squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = +Math.round(price * typeValue * squareValue * countValue * dayValue);
            }

            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    totalValue.textContent = Math.floor(progress * total);
                }
            });

        };
        calcBlock.addEventListener('change', (e) => {
            const target = e.target;
            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });

    };

    calc(100);

    // send-ajax form

    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так...';
        const loadMessage = 'Загрузка...';
        const succesMessage = 'Спасибо! Мы скоро с Вами свяжемся!';
        const statusMessage = document.createElement('div');

        statusMessage.style.cssText = 'font-size: 2rem; color: #fff';

        const validForm = (elemWork) => {
            const formBtn = document.querySelectorAll('.form-btn');
            const onBtn = () => {
                formBtn.forEach((item) => {
                    item.removeAttribute('disabled');
                });
            };

            const offBtn = () => {
                formBtn.forEach((item) => {
                    item.setAttribute('disabled', true);
                });
            };

            const checkPhone = /^(\+7)?8?([-()]*\d){10}$/;
            const checkEmail = /^\w+@\w+\.w{2,}$/;

            if (elemWork.name === 'user_phone') {
                elemWork.value = elemWork.value.replace(/^\++/g, '+');
                elemWork.value = elemWork.value.replace(/[^\++/, '-')0-9]{10, }/g, '');
                let valid = checkPhone.test(elemWork.value);
                if (!valid) {

                    const errorDiv = document.createElement('div');
                    errorDiv.textContent = 'Ошибка в этом поле';
                    if (elemWork.nextElementSibling && elemWork.nextElementSibling.textContent === 'Ошибка в этом поле') {
                        return;
                    }
                    elemWork.insertAdjacentElement('afterend', errorDiv);
                    offBtn();
                } else {
                    if (elemWork.parentNode.lastElementChild.textContent === 'Ошибка в этом поле') {
                        elemWork.parentNode.lastElementChild.remove();
                    }
                    onBtn();
                }
            }

            if (elemWork.name === 'user_email') {
                elemWork.value = elemWork.value.replace(/[^@a-zA-Z0-9.-_]/g, '');
                let valid = checkEmail.test(elemWork.value);
                if (!valid) {

                    const errorDiv = document.createElement('div');
                    errorDiv.textContent = 'Ошибка в этом поле';
                    if (elemWork.nextElementSibling && elemWork.nextElementSibling.textContent === 'Ошибка в этом поле') {
                        return;
                    }
                    elemWork.insertAdjacentElement('afterend', errorDiv);
                    offBtn();
                } else {
                    if (elemWork.parentNode.lastElementChild.textContent === 'Ошибка в этом поле') {
                        elemWork.parentNode.lastElementChild.remove();
                    }
                    onBtn();
                }
            }

            if (elemWork.name === 'user_name') {
                elemWork.value = elemWork.value.replace(/[^а-яё\s]/ig, '');
            }

            if (elemWork.name === 'user_message') {
                elemWork.value = elemWork.value.replace(/[^а-яё\s]/ig, '');
            }
        };

        const sendAllForms = (elemWork) => {
            console.dir(elemWork);

            if (elemWork.localName === 'form') {
                const inputFormElems = elemWork.querySelectorAll('input');
                const inputMail = elemWork.querySelector('input[name="user_email"]');
                const inputPhone = elemWork.querySelector('input[name="user_phone"]');
                const inputName = elemWork.querySelector('input[name="user_name"]');
                const inputMessage = elemWork.querySelector('input[name="user_message"]');

                if (inputPhone.value !== '' && inputMail.value !== '' && inputName.value !== '') {
                    let isMessage = 'false';
                    if (inputMessage) {
                        isMessage = 'true';
                    }
                    if (isMessage && inputMessage !== '') {

                        elemWork.appendChild(statusMessage);
                        statusMessage.textContent = loadMessage;
                        const formData = new FormData(elemWork);
                        let body = {};
                        formData.forEach((val, key) => {
                            body[key] = val;
                        });

                        postData(body, () => {
                            statusMessage.textContent = succesMessage;
                            for (let i = 0; i < inputFormElems.length; i++) {
                                inputFormElems[i].value = '';
                            }

                        }, (error) => {
                            statusMessage.textContent = errorMessage;
                            console.log(error);
                        });
                    }
                }
            }

        };

        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();

            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {

                    outputData();
                } else {
                    errorData(request.status);
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            console.log(body);
            request.send(JSON.stringify(body));
        };

        document.body.addEventListener('input', event => {
            event.preventDefault();
            validForm(event.target);
        });

        document.body.addEventListener('submit', event => {
            event.preventDefault();
            sendAllForms(event.target);
        });
    };

    sendForm();
});