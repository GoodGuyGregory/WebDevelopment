/*function showTodo(todo: {title: string, text: string}){
    console.log(todo.title+' '+todo.text);
}

let myTodo = {title: 'Program', text: 'Write Ts Code'}

showTodo(myTodo);*/

//create your own type a custom type of TODO

interface Todo{
    title: string;
    text: string;
}

function showTodo(todo: Todo){
    console.log(todo.title+':'+todo.text);
}

let myTodo = {title: 'Program', text: 'Write Ts Code'}

showTodo(myTodo);
