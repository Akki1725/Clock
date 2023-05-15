let sc = document.querySelector('#sc');
let mn = document.querySelector('#mn');
let hr = document.querySelector('#hr');

let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let hours = document.getElementById('hours');
let meridiem = document.getElementById('meridiem');
let i = 1;

function tick() {

    let day = new Date();

    let ss = day.getSeconds() * 6;
    let mm = day.getMinutes() * 6;
    let hh = day.getHours() * 30;

    let s = day.getSeconds();
    let m = day.getMinutes();
    let h = day.getHours();

    let currentMeridiem = (h >= 12) ? "PM" : "AM";

    if (h > 12) {
        h -= 12;
    }

    s = (s < 10) ? "0" + s : s;
    m = (m < 10) ? "0" + m : m;
    h = (h < 10) ? "0" + h : h;
    
    sc.style.transform = `rotateZ(${ss}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;

    seconds.innerHTML = s;
    minutes.innerHTML = m;
    hours.innerHTML = h;
    meridiem.innerHTML = currentMeridiem;
}

document.documentElement.setAttribute("id", "color-scheme-1");

setInterval(() => {
    tick();
});
