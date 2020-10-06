window.addEventListener('DOMContentLoaded', () => {
    const div = document.querySelector('div');

    const getNowDate = (deadLine) => {

        let p = document.createElement('p');
        let span = document.createElement('span');
        const getTimeRemaining = () => {
            let date = new Date();
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
            p.append(span);

            function getWeekDay(date) {
                let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

                return days[date.getDay()];
            }


            let today = `Сегодня: ${getWeekDay(date)}`;
            let nowTime = `Текущее время:  ${(date.getHours() < 10) ? '0' : ''}${date.getHours()} : ${(date.getMinutes() < 10) ? '0' : ''}${date.getMinutes()} : ${(date.getSeconds() < 10) ? '0' : ''}${date.getSeconds()} ${(date.getHours() > 12) ? 'PM' : 'AM'}`;
            let toNY = `До Нового года осталось ${hours} дней`;

            p.innerHTML = `
            <span>${today}</span><br>
            <span>${nowTime}</span><br>
            <span>${toNY}</span>
            `;


            setTimeout(getTimeRemaining, 1000);

        };
        getTimeRemaining();
    };

    getNowDate('31 december 2020');

});

