const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...';
    const loadMessage = 'Загрузка...';
    const succesMessage = 'Спасибо! Мы скоро с Вами свяжемся!';
    const statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 2rem; color: #fff';

    const removePrompt = (elemWork) => {
        if (elemWork.nextElementSibling && elemWork.nextElementSibling.textContent === 'Заполните поле!') {
            elemWork.nextElementSibling.remove();
        }
    };

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
            console.log(elemWork.name);
            elemWork.value = elemWork.value.replace(/^\++/g, '+');
            elemWork.value = elemWork.value.replace(/[^+0-9]/g, '');
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
            console.log(elemWork.name);
            elemWork.value = elemWork.value.replace(/[^@a-zA-Z0-9.-_]/g, '');
            // if (!checkEmail.test(elemWork.value)) {
            //
            //     const errorDiv = document.createElement('div');
            //     errorDiv.textContent = 'Ошибка в этом поле';
            //     if(elemWork.nextElementSibling && elemWork.nextElementSibling.textContent === 'Ошибка в этом поле'){
            //         return;
            //     }
            //     elemWork.insertAdjacentElement('afterend', errorDiv);
            //     offBtn();
            // } else {
            //     console.log(elemWork.parentNode);
            //     console.log(elemWork.parentNode);
            //     if (elemWork.parentNode.lastElementChild.textContent === 'Ошибка в этом поле'){
            //         elemWork.parentNode.lastElementChild.remove();
            //     }
            //     onBtn();
            // }
        }

        if (elemWork.name === 'user_name') {
            console.log(elemWork.name);
            elemWork.value = elemWork.value.replace(/[^а-яё\s]/ig, '');
        }

        if (elemWork.name === 'user_message') {
            // elemWork.value = elemWork.value.replace(/[^а-яё\s]/ig, '');

            elemWork.value = elemWork.value.replace(/[^а-яА-Я ,.?!"';:\-\%()\#]/g, '');
        }
    };

    const sendAllForms = (elemWork) => {
        console.dir(elemWork);

        if (elemWork.localName === 'form') {
            const inputFormElems = elemWork.querySelectorAll('input');
            const inputMail = elemWork.querySelector('input[name="user_email"]');
            const inputPhone = elemWork.querySelector('input[name="user_phone"]');
            const inputName = elemWork.querySelector('input[name="user_name"]');
            const textMessage = elemWork.querySelector('textarea');
            console.log(textMessage);


            if (inputPhone.value !== '' && inputMail.value !== '' && inputName.value !== '') {
                if (!textMessage || textMessage && textMessage.value !== '') {
                    console.log(textMessage);
                    elemWork.appendChild(statusMessage);
                    statusMessage.textContent = loadMessage;
                    const formData = new FormData(elemWork);
                    let body = {};
                    formData.forEach((val, key) => {
                        body[key] = val;
                    });

                    postData(body)
                        .then((response) => {
                            console.log(elemWork);
                            console.log(response);
                            if (response.ok !== true) {
                                throw new Error('status network not 200');
                            }
                            statusMessage.textContent = succesMessage;
                            if (textMessage) {
                                textMessage.value = '';
                            }
                            for (let i = 0; i < inputFormElems.length; i++) {
                                inputFormElems[i].value = '';
                            }

                            setTimeout(() => {
                                statusMessage.remove();
                            }, 5000);

                        })
                        .catch((error) => {
                            statusMessage.textContent = errorMessage;
                            console.log(error);
                        });
                } else if (textMessage && textMessage.value === '') {
                    const errorDiv = document.createElement('div');
                    errorDiv.textContent = 'Заполните поле!';
                    errorDiv.style.cssText = 'color: red; line-height: 0px; height: 15px; font-size: 15px;';
                    if (textMessage.nextElementSibling && textMessage.nextElementSibling.textContent === 'Заполните поле!') {
                        return;
                    }
                    if (textMessage.value === '') {
                        textMessage.insertAdjacentElement('afterend', errorDiv);
                    }
                }

            } else {
                for (let i = 0; i < inputFormElems.length; i++) {
                    const errorDiv = document.createElement('div');
                    errorDiv.textContent = 'Заполните поле!';
                    errorDiv.style.cssText = 'color: red; line-height: 0px; height: 15px; font-size: 15px;';
                    console.log(inputFormElems[i]);
                    if (inputFormElems[i].nextElementSibling && inputFormElems[i].nextElementSibling.textContent === 'Заполните поле!') {
                        return;
                    }
                    if (inputFormElems[i].value === '') {
                        inputFormElems[i].insertAdjacentElement('afterend', errorDiv);
                        console.log(inputFormElems[i]);
                        // setTimeout(() => {
                        //     inputFormElems[i].nextElementSibling.remove();
                        // }, 2000);
                    }
                }
            }
            document.body.addEventListener('input', removePrompt);
        }


    };

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            // mode: 'same-origin',
            // cache: 'default',
            // credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

    };

    // const promise = new Promise((resolve, reject) => {
    //     const request = new XMLHttpRequest();
    //
    //     request.addEventListener('readystatechange', () => {
    //         if (request.readyState !== 4) {
    //             return;
    //         }
    //         if (request.status === 200) {
    //             resolve();
    //         } else {
    //             reject();
    //         }
    //     });
    //
    //     request.open('POST', './server.php');
    //     request.setRequestHeader('Content-Type', 'application/json');
    //     console.log(body);
    //     request.send(JSON.stringify(body));
    // });
    // return promise;

    document.body.addEventListener('input', event => {
        event.preventDefault();
        validForm(event.target);
        removePrompt(event.target);
    });

    document.body.addEventListener('submit', event => {
        event.preventDefault();
        sendAllForms(event.target);
    });
};

export default sendForm;
