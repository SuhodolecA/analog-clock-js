const secArrow = document.querySelector('.sec');
const minArrow = document.querySelector('.min');
const hourArrow = document.querySelector('.hour');

setInterval(updateClock);

function updateClock () {
    let date = new Date;
    let sec = date.getSeconds() / 60;
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() + min) / 12;

    secArrow.style.transform = `rotate(${sec * 360}deg)`;
    minArrow.style.transform = `rotate(${min * 360}deg)`;
    hourArrow.style.transform = `rotate(${hour * 360}deg)`;
}
