const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    clock.innerText = `${hours}:${min}`; 
}

getClock(); //시계를 호출하고
setInterval(getClock, 1000); //매 초마다 getClock을 다시 실행 중.
