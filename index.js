// Follow along with the examples here
// function doNothing() { }
// function sayHello() {
//   console.log("Hello");
// }
// sayHello();
// function sayHelloToGuadalupe() {
//   console.log("Hello, Guadalupe");
// }
// sayHelloToGuadalupe();
// function sayHelloTo(someone) {
//   console.log(`Hello ${someone}`);
// }
// sayHelloTo("Ivan");
// function sayGreetingsTo(greetings, someone) {
//   console.log(`${greetings} ${someone}`);
// }
// sayGreetingsTo("Greetings", "Ivan");
// sayGreetingsTo("Ivan", "Greetings");

// function add(x, y) {
//   // return 
//   x + y;
// }
// console.log(add(1, 2));

function say(greeting, firstName) {
  console.log("I was called first!");
  return `${greeting}, ${firstName}!`;
  console.log("I was called last!");
}
console.log(say("Howdy", "partner"));

