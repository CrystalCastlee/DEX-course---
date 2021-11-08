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
