const EventEmitter = require("node:events");
const myEmitter = new EventEmitter();

// // First listener
// myEmitter.on("event", function firstListener(this) {
//   console.log("Helloooo! first listener", this);
// });

// // Second listener
// myEmitter.on("event", function secondListener(arg1, arg2) {
//   console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
// });
// // Third listener
// myEmitter.on("event", function thirdListener(...args) {
//   const parameters = args.join(", ");
//   console.log(`event with parameters ${parameters} in third listener`);
// });
// myEmitter.on("event", (a, b) => {
//   console.log(a, b, this);
// });
// console.log(myEmitter.listeners("event"));

// myEmitter.emit("event", 1, 2, 3, 4, 5);

// myEmitter.on("event", (a, b) => {
//   setImmediate(() => {
//     console.log("this happens asynchronously");
//   }, );
// });
// myEmitter.emit("event", "a", "b");
// let m = 0;
// myEmitter.once("event", () => {
//   console.log(++m);
// });
// myEmitter.emit("event");
// // Prints: 1
// myEmitter.emit("event");
// // Prints: 2

//
//require('http')
