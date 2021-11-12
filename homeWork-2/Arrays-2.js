let styles = ['Джаз', 'Блюз']; //Создал массив styles с элементами «Джаз» и «Блюз»
console.log(styles);

styles.push('Рок-н-ролл'); //Добавил «Рок-н-ролл» в конец
console.log(styles);

if(styles.length % 2 != 0) {
    styles[styles.length%2] = 'Классика'; //Заменил значение в середине на «Классика», код для поиска значения в середине работаеи для массивов с любой нечетной длиной
}
console.log(styles);

styles.shift(); //Удалил первый элемент массива 
console.log(styles);

styles.unshift('Рэп','Рэгги') //Вставил «Рэп» и «Регги» в начало массива
console.log(styles);

