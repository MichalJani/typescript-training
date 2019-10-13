"use strict";
// function showTodo(todo: {title: string; text: string}) {
//   console.log(todo.title + ': ' + todo.text);
// }
function showTodo(todo) {
    console.log(todo.title + ': ' + todo.text);
}
let myTodo = { title: 'Hello', text: 'Take out trash' };
showTodo(myTodo);
