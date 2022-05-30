import '../css/common.css'

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// const logMessage = () => {
//     console.log('Лог при вызове callback функции через 3 секунды')
// }

// console.log('До вызова setTimeout')

// setTimeout((x) => {
//     console.log(x)
//     console.log('1 - Внутри callback для setTimeout')
// },
//  1000,
//  50,
//  );

// setTimeout((y) => {
//     console.log(y)
//     console.log('2 - Внутри callback для setTimeout')
// },
// 2000,
// 10,
// );

// console.log('После вызова setTimeout')


/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
    console.log(`Log in ${time}ms, because we did not cancle timeout`)
}

const timerId = setTimeout(logger,2000,2000)

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer)

if(shouldCancelTimer) {
    clearTimeout(timerId)
}