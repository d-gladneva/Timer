const startSlider = () => {
    const portfolioDots = document.querySelector('.portfolio-dots');
    const slide = document.querySelectorAll('.portfolio-item');
    const renderDots = (q) => {
        const li = `
            <li class="dot"></li>
        `;
        return li.repeat(q);
    };

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

    portfolioDots.insertAdjacentHTML('beforeEnd', renderDots(slide.length));

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
};

export default startSlider;