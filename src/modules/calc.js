const calculator = () => {
    const calcBlock = document.querySelector('.calc-block');
    const inputElems = calcBlock.querySelectorAll('input[type="text"]');

// валидация

    const checkValidInput = () => {
        for (let i = 0; i < inputElems.length; i++) {
            inputElems[i].value = inputElems[i].value.replace(/\D/g, '');
        }
    };

    calcBlock.addEventListener('input', checkValidInput);

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

    const calc = (price = 100) => {

        const calcType = document.querySelector('.calc-type');
        const calcSquare = document.querySelector('.calc-square');
        const calcDay = document.querySelector('.calc-day');
        const calcCount = document.querySelector('.calc-count');
        const totalValue = document.getElementById('total');

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
};


export default calculator;