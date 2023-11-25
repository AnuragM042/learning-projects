const todolist = [];
 



renderTodoList();

function renderTodoList() {
let todoHtml = '';

for (let i =0 ; i<todolist.length;i++){
    const todoobject = todolist[i]
    const name = todoobject.name;
    const dueDate = todoobject.dueDate;
    const html = `
        <p>
          ${name} ${dueDate}
        </p>
        <button onclick="todolist.splice(${i},1);
        renderTodoList() " class= delete_css> Delete</button>
        `;
    todoHtml = todoHtml + html;
}
 document.querySelector('.js-todo-list').innerHTML = todoHtml ; 
}

function addTodo() {
const inputElement = document.querySelector('.js_name_input');
    const name = inputElement.value;
    const dueDateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateInputElement.value;

    todolist.push({
        name: name,
        dueDate : dueDate,
    });
    console.log(todolist);
     
     renderTodoList();
}
