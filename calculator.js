document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.getElementById('inputbox');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    function handleButtonClick(event) {
        const clickedButtonValue = event.target.innerText;
        
        switch (clickedButtonValue) {
            case 'AC':
                inputBox.value = '';
                break;
            case 'DEL': 
                inputBox.value = inputBox.value.slice(0, -1);
                break;
            case '=':
                try {
                    inputBox.value = eval(inputBox.value);
                } catch (error) {
                    inputBox.value = 'Error';
                }
                break;
            default:
                inputBox.value += clickedButtonValue;
                break;
        }
    }
});
