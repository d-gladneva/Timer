class Validator {
    constructor({selector, pattern = {}, method}){
        this.form= document.querySelector(selector);
        this.pattern = pattern;
        this.method = method;
        this.elemsForm = [...this.form.elements].filter(item => item.tagName.toLowerCase() !== 'button'&&
            item.type !== 'button');
        this.error = new Set();

    }

    init(){
        this.applyStyle();
        this.setPattern();
        this.elemsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)))
        this.form.addEventListener('submit', (e) => {
            this.elemsForm.forEach(elem => this.checkIt({target: elem}));
            if (this.error.size){
                e.preventDefault();
            }
        });
    }

    isValid(elem){
        const validatorMethod = {
            notEmpty(elem){
                if(elem.value.trim()===''){
                    return false;
                }
                return true;
            },
            pattern(elem, pattern){
                return pattern.test(elem.value);
            }
        };

        if (this.method){
            const method = this.method[elem.id];
            console.log(method);

            if(method){
                return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
            }
        } else {
            console.warn('Необходимо передать id полей ввода и методы проверки этих полей!')
        }
        return true;
    }

    checkIt(e){
        const target = e.target;
        console.log(e);
        console.log(this);
        if (this.isValid(target)){
            this.showSuccess(target);
            this.error.delete(target)
        } else {
            this.showError(target);
            this.error.add(target);
        }
        console.log(this.error);
    }



    showError(elem){
        elem.classList.remove('success');
        elem.classList.add('error');
        if(elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
            return;
        }
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в этом поле';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterend', errorDiv);
        console.log(elem.nextElementSibling);

    }

    showSuccess(elem){
        elem.classList.remove('error');
        elem.classList.add('success');
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
            elem.nextElementSibling.remove();
        }
    }

    applyStyle(){
        const style = document.createElement('style');
        style.innerHTML = `
            input.success {
                border: 2px solid green;
                background-color: green;
            }
            input.error {
                border: 2px solid red;
                background-color: red;
            }
            .validator-error {
                font-size: 14px;
                color: red;
            }
        `;
        document.head.appendChild(style);
    }

    setPattern(){
        if (!this.pattern.phone){
            this.pattern.phone = /^\+?[78]([-()]*\d){10}$/;
        }

        if (!this.pattern.email){
            this.pattern.email = /^\w+@\w+\.w{2,}$/;
        }
    }
}