import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */


const logger = time => console.log(`Log every ${time}ms - ${Date.now()}`)

// console.log('До вызова setInterval')
// setInterval(logger,2000,2000)
// console.log('После вызова setInterval')


/*
 * Очистка интервала с clearInterval(intervalId)
 */

// const intervalId = setInterval(logger,2000,2000)
// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval)

// if(shouldCancelInterval) {
//     clearInterval(intervalId)
// }



console.log('До вызова setTimeout')
console.log('До вызова setTimeout')
console.log('До вызова setTimeout')
console.log('До вызова setTimeout')
console.log('До вызова setTimeout')

setTimeout(() => {
    console.log(`Вызов отложенной функции`)
},0)
console.log('После вызова setTimeout')

