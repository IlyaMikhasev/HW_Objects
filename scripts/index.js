let car = new Object();
car.company = 'Volvo';
car.model = 's80';
car.year = 1998;
car.speed = 65;
function CarInfo(car){
    let output = `Автомобиль марки: ${car.company}\n`+
    `модель: ${car.model}\n`+
    `год выпуска: ${car.year}\n`+
    `Средняя скорость: ${car.speed}`;
    return output;
}
alert(CarInfo(car));
function timeTrack(distance,speed){
    let time = distance/speed ;
    if(time>4)
        time+= Math.floor((distance/speed)/4);
    return `Для преодаления растояния в ${distance}км будет потраченно ${time.toFixed(2)}ч.`;
}
console.log(timeTrack(650,car.speed));
function yearPassed(year){
    let date = new Date();
    let passed = Math.abs(date.getUTCFullYear() - year) 
    return `Прошло с выпуска автомобиля - ${passed} лет`;
} 
console.log(yearPassed(car.year));
