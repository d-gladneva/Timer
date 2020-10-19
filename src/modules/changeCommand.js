const changeCommand = () => {
    const command = document.getElementById('command');
    command.addEventListener('mouseover', (e) => {
        console.log(8899);
        let target = e.target;
        if (target.classList.contains('command__photo')) {
            let dataImgValue = target.getAttribute('data-img');
            let dataSrcValue = target.getAttribute('src');
            target.setAttribute('data-img', dataImgValue);
            target.setAttribute('src', dataSrcValue);
        }
    });
    command.addEventListener('mouseout', (e) => {
        console.log(107);
        let target = e.target;
        let dataImgValue = target.getAttribute('data-img');
        let dataSrcValue = target.getAttribute('src');
        target.setAttribute('data-img', dataImgValue);
        target.setAttribute('src', dataSrcValue);
    });
};

export default changeCommand;