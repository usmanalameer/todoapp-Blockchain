let form = document.querySelector(".form");
let input = document.querySelector(".input");
let todosContainer = document.querySelector(".todos");

var id = 1;

const deleteTodo = (e) => {
  todosContainer.removeChild(e.target.parentElement);
};
const editTodo = (e) => {
  let parent = e.target.parentElement;
  let p = parent.querySelector("p");
  let updatedText = prompt("Edit Todo", p.innerHTML);

  p.innerHTML = updatedText;
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if (input.value < 2) return;
  
    // CREATING ELEMENTS ==============
    let DIV = document.createElement("div");
    let P = document.createElement("p");
    let EDIT_BTN = document.createElement("button");
    let DELETE_BTN = document.createElement("button");
  
    //   TEXT CONTENTS ==============
    let P_text = document.createTextNode(input.value);
    let EDIT_BTN_text = document.createTextNode("Edit");
    let DELETE_BTN_text = document.createTextNode("Delete");
  
    // ATTRIBUTES
    DIV.setAttribute("id", id);
    DELETE_BTN.addEventListener("click", deleteTodo);
    EDIT_BTN.addEventListener("click", editTodo);
    DIV.setAttribute("class", "todo");
  
    //   APPENDING ==============
    P.appendChild(P_text);
    EDIT_BTN.appendChild(EDIT_BTN_text);
    DELETE_BTN.appendChild(DELETE_BTN_text);
    DIV.appendChild(P);
    DIV.appendChild(EDIT_BTN);
    DIV.appendChild(DELETE_BTN);
  
    todosContainer.appendChild(DIV);
  
    id++;
    input.value = "";
  });
  