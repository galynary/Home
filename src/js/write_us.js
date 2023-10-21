const inputElements = document.querySelectorAll('.write-us__input');

inputElements.forEach(input => {
  input.addEventListener('focus', () => {
    // Скрываем плейсхолдер при фокусе
    input.removeAttribute('placeholder');
  });

  input.addEventListener('blur', () => {
    // Восстанавливаем плейсхолдер при потере фокуса, если поле ввода пусто
    if (input.value === '') {
      input.setAttribute('placeholder', input.getAttribute('data-placeholder'));
    }
  });

  // Сохраняем оригинальный плейсхолдер в атрибуте data-placeholder
  input.setAttribute('data-placeholder', input.getAttribute('placeholder'));
});