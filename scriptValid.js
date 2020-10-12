const valid = new Validator ({
    selector: '#form1',
    pattern: {
        phone: /^\+380\d{7}$/,
        zip: /\d{5,6}/
    },
    method: {
        'phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'email': [
            ['notEmpty'],
            ['pattern', 'email']
        ],
    }
});

valid.init();