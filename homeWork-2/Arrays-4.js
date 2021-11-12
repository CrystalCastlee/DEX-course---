// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {

    let arrNumbers = []; //объявляем массив

    while (true) {

      let value = prompt("Введите число", 0);

      if (value === "" && value === null && !isFinite(value)) {
          break;
      } //проверяем что мы вписали число

      arrNumbers.push(+value); // добавляем число в масив
    }

    let sum = 0;
    for (let number of arrNumbers) {
      sum += number; // считаем сумму элементов массива
    }

    return sum;
  }

  alert( sumInput() );
