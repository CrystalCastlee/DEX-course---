// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let obj = {name: 'Gena'};
const isEmpty = () => {
    for(let key in obj){
        return false;
    } 
    return true;
};
console.log(isEmpty()) // false так как цикл начал выполняться