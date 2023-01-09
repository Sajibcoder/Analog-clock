const deg = 6;
const hr = document.querySelector('#hr');
const mnt = document.querySelector('#mnt');
const sec = document.querySelector('#sec');
setInterval (() =>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() *deg;
    let ss = day.getSeconds() *deg;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mnt.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
})
