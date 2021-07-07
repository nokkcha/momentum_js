
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting"); 
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//로그인 버튼을 누르면 동작하는 함수
function onLoginSubmit(info){
    info.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
    
} 

//greeting에 이름 나타내기
 function paintGreeting(username){
  
    //원래 안보이던 거 보이도록.
    greeting.classList.remove(HIDDEN_CLASSNAME);

    const date = new Date();
    const hour = date.getHours();
    let mention = 'Hello';

     if(0<= hour && 4>= hour || 20 < hour){
         mention = "Good night";
     } else if (hour >= 5 && hour <= 12){
         mention = "Good morning";
     } else if (hour >= 13 && hour <= 20){
         mention = "Good afternoon";
     }
     greeting.innerText = `${mention}, ${username}.`;
 }

//사용자의 이름을 LocalStorage에 저장
const savedUsername = localStorage.getItem(USERNAME_KEY);

//username이 없으면?
if(savedUsername === null){
    //이름 작성 창 보이게
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit); 
} else {
    //username이 존재하면
    //이름 보이는 창 보이도록 하기.
    paintGreeting(savedUsername);

}