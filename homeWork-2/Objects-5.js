// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.


let obj = {
    width: 30,
    height: 60,
    title: 'My menu'
}

const multiplyNumeric = (obj) =>{
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key] *= 2;
            console.log(obj[key])
        } 
        
    }
}
multiplyNumeric(obj)
console.log(obj.height, obj.width) //60 120