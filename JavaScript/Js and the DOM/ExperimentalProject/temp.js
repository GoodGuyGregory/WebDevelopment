/*
//allows passing a function into another function with the args
function exec(func, arg) {
  func(arg);
}

// Function expressions
exec(function say (something) {
  console.log(something);
}, 'Double dipping, success my dude');

// an Anonymous function

exec((something) => {
  console.log(something);
}, 'Anonymous Functions!');
*/

// This is typically done for delaying the execution of a function for example
// the setTimeOut function https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

window.setTimeout((something) => {
  console.log(something);
}, 3000, 'Anonymous Functions!, Basically a nested function');
