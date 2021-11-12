// У нас есть объект, в котором хранятся зарплаты нашей команды:


let obj = {
    John: 100,
    Ann: 160,
    Pete: 130
}
if(obj != undefined){
    let sum = obj.John + obj.Ann + obj.Pete;
    console.log(sum) // 390
} // но этот вариант плох так как есть конкретные имена ключей


// более лучший вариант
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Alex: 110
}
let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
console.log(sum) // 500