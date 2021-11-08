let name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya



function ecma(input){
    if(input == 'ECMAScript'){
        console.log('Верно');
    } else{
        console.log('Ложь')
    }
}
ecma('ECMAScript');





// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

let ecma = prompt('Какое официальное название JavaScript?', '');
if(ecma == 'ECMAScript'){
    alert('Верно!');
} else{
    alert('Не знаете? ECMAScript!');
} 




// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

let i = prompt('Введите число')
if(i > 0 ){
    alert('значение больше нуля');
} else if (i < 0){
    alert('значение меньше нуля');
} else if(i == 0){
    alert('значение равно нулю');
}





// Перепишите конструкцию if с использованием условного оператора '?':
//      Условие 
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
    //  Конец условия

function get(a,b){
    let result;
    result = (a + b < 4) ? console.log('Мало') : console.log('Много');
}
get(5,1)  //Много



//      Условие 
// Перепишите if..else с использованием нескольких операторов '?'.
// Для читаемости рекомендуется разбить код на несколько строк.
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
    //  Конец условия

let message;
function inputMessages(login){
    message = (login == 'Сотрудник') ? console.log('Привет') : 
    (login == 'Директор') ? console.log('Здравствуйте') : 
    (login == '') ? console.log('Нет логина') : '';
}

inputMessages('');




// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst('вася') == 'Вася';
// function firstLetter(str){
//     if(!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(firstLetter('вася')); // Вася


// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

// function checkSpam(str){
//   let lowerStr = str.toLowerCase();
//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }
// alert( checkSpam("innocent rabbit") );





// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// function truncate(str, maxlength) {
//   return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '…' : str;
// }
// alert(truncate('двадцатый смивол тут!',20)) // двадцатый смивол ту...




// let num = +prompt("Enter a number", '');
// вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число



// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
// let x = prompt('Введите первое число ', ""); 
// let y = prompt('Ведите второе число ', "") 
// alert(+x + +y);


// Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.
// alert( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4




// Этот цикл – бесконечный. Он никогда не завершится, почему?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
// Цикл бесконечный потому что при работе с дробями возникают неточност и i не может быть раное 10





// Ввод числового значения
// важность: 5
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

// let input = prompt('введите число ', '0')
// let readNumber = () => {
//   if (input == +input) {
//     alert('число ' + input)
//   } else{
//     alert('число ' + input)
//   }
// }
// readNumber()





// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// alert( random(1, 5) );
// alert( random(1, 5) );
// alert( random(1, 5) );



// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// Для вывода используйте alert.

// let date = new Date(2012, 1, 20, 3, 12);
// alert( date );

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"
