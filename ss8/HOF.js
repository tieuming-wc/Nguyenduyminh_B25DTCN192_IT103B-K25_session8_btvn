const sum = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

const result = sum(10, 20);

console.log("sum =", result);

//HOF
// 1. hàm nhận hamf khác làm tham số
function greetr(name) {
  return "Hello ${name}";
}

console.log(greet("Nguyễn Văn A"));

function processUserInput(callback) {
  // callback <=> greet
  const name = "RE";
  console.log(callback(name));
  // dòng 19 tương đương với đoạn code sau: greet(name);
}

processUserInput(greet);

// 2. hàm trả về 1 hàm khác
function mltiplyBy(x) {
  // x = 2
  //y = 5
  return function (y) {
    return x * y;
  };
}

const duble = mltiplyBy(2);
// double = function (y) {
// return x*y;
// }
console.log("double:", double(5));

// console.log(double(5)); //10
