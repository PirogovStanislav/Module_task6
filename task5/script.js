const inputField = document.querySelector('#inputField');
const duplicateField = document.querySelector('#duplicateField');
const buttonClick = document.querySelector('#buttonClick')

inputField.addEventListener('input', function(){
    duplicateField.textContent = inputField.value;
});

inputField.addEventListener('mousedown', (event) => {
if (event.which === 1) {
    console.log('Левая');
    }
    else if (event.which === 2) {
        console.log('Средняя')
    } else if (event.which === 3) {
        console.log('Правая')
    }

});

inputField.addEventListener('keypress', (event) => {
console.log(String.fromCharCode(event.charCode));

});

buttonClick.addEventListener('click', function(event) {
    event.preventDefault();
    const inputValue = inputField.value;
    console.log(inputField.value);
    inputField.value='';
    duplicateField.textContent = "";

});

