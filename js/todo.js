const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
//To do list 
const TODOS_KEY = "todos";

//To do를 추가, 삭제해야 하기 때문에 const대신 let
let toDos = [];

//할 일 local Storage 저장
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//할 일 삭제
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    //toDo.id가 li.id와 다른 것만 선택해서 출력!
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

//할 일 생성
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "🤍";
    button.addEventListener("click",deleteToDo);
    li.appendChild(button);
    li.appendChild(span); //자식을 가진다.
    toDoList.appendChild(li);

}


//submit했을 때의 동작 처리
toDoForm.addEventListener("submit",handleToDoSubmit);
//할 일들에 각각 아이디 생성하고 새로운 newTodo에 push
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(), //랜덤 숫자
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}




//localStorage에 저장된 할 일 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
    //할 일들이 저장되어 있다면?
    const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos; 
    parsedToDos.forEach(paintToDo);
    //forEach는 각각의 item에 대해 sayHello를 실행시킴.
}
