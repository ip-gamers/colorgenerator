function generateRandomColor() {
    // Генерируем случайные значения для красного, зеленого и синего цветов
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Формируем строку цвета в формате HEX
    const color = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

    // Получаем элемент, в который будем выводить цвет
    const colorContainer = document.getElementById('color-container');

    // Определяем яркость цвета фона
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

    // Выбираем цвет текста в зависимости от яркости фона
    const textColor = brightness > 128 ? 'black' : 'white';

    // Устанавливаем цвет текста и фона
    colorContainer.style.color = textColor;
    colorContainer.style.backgroundColor = color;

    // Выводим текст с текущим цветом
    colorContainer.textContent = `Случайный HTML цвет: ${color}`;

    // Копируем цвет в буфер обмена
    navigator.clipboard.writeText(color).then(function () {
        console.log('Цвет скопирован в буфер обмена: ', color);
    }).catch(function (err) {
        console.error('Не удалось скопировать цвет в буфер обмена: ', err);
    });
}

// Получаем кнопку и добавляем обработчик события на клик
document.addEventListener('DOMContentLoaded', function () {
    const colorButton = document.getElementById('color-container');
    colorButton.addEventListener('click', generateRandomColor);
});