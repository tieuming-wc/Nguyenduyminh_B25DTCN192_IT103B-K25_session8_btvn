function sayHello(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  const name = "RE";
  callback(name);
}

processUser(sayHello);

// delay chạy chương trình
// setTimeout( () => {
//     console.log("runnin....."))
// }, 1),
