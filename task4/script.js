const MyText = document.querySelector('#MyText');

MyText.addEventListener ('click', () => {
    alert('Вы уверены, что хотите изменить ссылку?');

    const userText = prompt('Введите новое наименование ссылки');
    const userTextField = document.querySelector('button');
    userTextField.textContent = userText;
    console.log('Текст в button изменён на', userText);



})


