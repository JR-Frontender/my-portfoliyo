// 1. Находим кнопку и элемент <body>
const themeToggle = document.getElementById('theme-toggle'); 
const bodyElement = document.body; 
// 2. Добавляем "слушателя" на кнопку
themeToggle.addEventListener('click', function()
{
// 3. Главная команда: переключаем класс 'dark-mode' на теге <body>
    bodyElement.classList.toggle('dark-mode');
});