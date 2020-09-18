window.addEventListener('DOMContentLoaded', () => {
    let date = new Date();
    console.log(date.getHours());
    const div = document.querySelector('div');

    const getNowDate = (deadLine) => {

        let p = document.createElement('p');

        const getTimeRemaining = () => {
            let dateStop = new Date(deadLine).getTime();
            let dateNow = new Date().getTime();
            let timeRemaining = (dateStop - dateNow) / 1000;
            let hours = Math.floor(timeRemaining / 60 / 60 / 24);

            if (date.getHours() >= 3 && date.getHours() < 10) {
                div.textContent = 'Доброе утро!';
            } else if (date.getHours() >= 10 && date.getHours() < 17) {
                div.textContent = 'Добрый день!';
            } else if (date.getHours() >= 17 && date.getHours() < 23) {
                div.textContent = 'Добрый вечер!';
            } else {
                div.textContent = 'Доброй ночи!';
            }
            div.append(p);

            function getWeekDay(date) {
                let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

                return days[date.getDay()];
            }

            p.textContent = `Сегодня: ${getWeekDay(date)}
            Текущее время:  ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${(date.getHours() > 12) ? 'PM' : 'AM'}
            До Нового года осталось ${hours} дней`;

        };
        setInterval(getTimeRemaining, 1000);
    };

    // getNowDate();
    let nowDate = setInterval(getNowDate, 1000, '30 october 2020');

});

