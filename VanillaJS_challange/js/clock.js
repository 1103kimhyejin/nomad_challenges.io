const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    //.padStart() -> 글자수는 2자리 빈자리 0으로 채우기
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000);


