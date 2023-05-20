// Счетчик
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const currentYear = new Date().getFullYear();
const nextYear = new Date(`May 31 2023 00:00:00`);

function updateCounter() {
    const currentTime = new Date();

    const diff = nextYear - currentTime;

    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24) + ' :';
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24 + ' :';
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60 + ' :';
    const secondsLeft = Math.floor(diff / 1000) % 60;



    days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

}
updateCounter()

setInterval(updateCounter, 1000)


//Валидация и отправка формы



// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('#form');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         let error = formValidate(form);
//     }
//     function formValidate(form) {
//         let error = 0;

//         if (input)
//     }

// })