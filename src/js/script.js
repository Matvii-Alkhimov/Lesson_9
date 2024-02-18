// const contEl = document.querySelector(".msg-container");
// const messageEl = document.querySelector(".js-alert");
// const taimerEl = document.querySelector(".msg-taimer")
// let timerId = null;
// let width = 100;

// messageEl.addEventListener("click", onNotificationClick);

// function showNotification() {
//     contEl.classList.add("is-visible");

//     timerId = setInterval(fn, 100);
// }

// function hideNotification() {
//     clearInterval(timerId);

//     contEl.classList.remove("is-visible");

    
// }

// function onNotificationClick() {
//     hideNotification();
// }

// function fn() {
//     width -= 2;
//     taimerEl.style.width = `${width}%`;
// }

// showNotification();

// setTimeout(hideNotification, 5000);


// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду, 
//  * починаючи від from і закінчуючи to.

// const timerId2 = setInterval(showNums, 1000, 1, 100);

// function printNumbers(from, to) {
//     let num = from;

//     const timerId2 = setInterval(()=>{
//         if (num === to) {
//             clearInterval(timerId2);
//         } else {
//             num += 1;
//             console.log(num);
//         }
//     },1000)
// }

// printNumbers(1, 10);


/*
 * Коли запуститься запланована функція?
 * 1.Після циклу.
 * 2. До циклу.
 * 3. На початку циклу.
 * Що буде показувати в консолі?
 */

// let a = 0;

// setTimeout(() => console.log('а в setTimeout', a), 100); // ?

// припустимо, що час виконання цієї функції > 100 мс
// for(let i = 0; i < 10000; i++) {
//   a += 1;
//   console.log('а всередині циклу', a);
// }


import { myFn } from './test';
import * as basicLightbox from 'basiclightbox';

const modal = basicLightbox.create(`
        <p class="modal-text">
            Please subscribe for getting news
        </p>
        <button class="modal-button">Subscribe</button>
`)

modal.show();

let index = 0;

const timer = setInterval(fn, 6000);

function fn() {
    if (index < 3) {
       modal.show();
       index += 1;
    } else {
        clearInterval(timer);
        return
    }
}

const buttonEl = document.querySelector(".modal-button");

buttonEl.addEventListener("click", () => {
    modal.close();
    clearInterval(timer);
    alert("Thanks!))")
})

myFn("Hello")