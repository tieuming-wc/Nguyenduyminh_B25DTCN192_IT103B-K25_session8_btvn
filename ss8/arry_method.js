const numbers = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0 ){
        continue;
    }
    console.log(numbers[i]);
}

// forEach
// forEach khác với for ở chỗ: không cần biết trước số lần lặp
// không thể sử dụng các từ khóa : continue, break, return
numbers.forEach((value, index, array) => {
    if (value[i] % 2 !== 0 ){
        continue;
    }
    console.log(value, index, array);
})

// Bài toán: Lọc ra các phần tử chẵn và trả về 1 mảng mới có các phần tử chẵn đó

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 ) {
        newNumbers.push(numbers[i]);

    }
}

console.log("newNumbers: ", newNumbers);

// filter(): sử dụng để duyệt qua các phần tử của mảng
// trả về 1 mamhr ới có các phần tử thỏa mãn điều kiện
// const resultFilteres = numbers.filter((element) => {
//     return element % 2 === 0;
// });

const resultFilteres = numbers.filter((element) => element % 2 === 0

console.log("resultFilteres:", resultFilteres);

//Bài toán: tìm kiếm trong mảng xem có phần tử nào = 5? Nếu có sẽ trả về phần tử đâu tiên tìm thấy, nếu không sẽ trả về Null

for (let i = 0; i < number.length; i++) {
    if (numbers[i] === 5) {
        console.log(numbers[i], i);
        break;
    }
}
 // find(): duyệt qua các phần tử của mảng, trả về phần tử đâu tiên dược tìm thấy
 //nếu không tìm thấy sẽ trả về undefined

console resultFind = numbers.filter((element) => element === 5);

console.log("resultFind: ",resultFind);

//Bài toán: tiến hành tạo 1 mảng mới từ mảng numbers, có giá trị được 
// format sau: [" vị trí 1", "vị trí 2", "vị trí 3",...]


let formatNumbers = [];
for (let i = 0; i < number.length; i++) {
    formatNumbers.push(`vị trí ${numbers[i]}`);
}
console.log("formatNumbers: ", formatNumbers);

//map(): sử udngj để duyệt qua các phần tử của mảng 
// trả về 1 mảng mới có số lượng phần tử bằng với số lượng phần tử bằng mới số lượng phần tử của mảng
// cũ( nhưng có được định  dạng, tinh chỉnh)

const mapNUmbers = numbers.map((element) => `vi trí ${element}`);

console.log("mapNumbers: ", mapNumbers);

const scores = [8,6,9,10,5];

//Bài toán : kiểm tra lớp CNTT 7 có học tốt không? điều kiện tất cả các điển của sinh viên cần phải >= 5 
//nếu thỏa mãn thì trả về True, ngược lại trả về False

const checkResult = () => {
    let flag = true;

for (let i = 0; i < scores.length; i++) {
    if (scores[i]) {
        flag = false;
    }
}
return flag;
};

// every(): duyệt qua các phần tử của mảng, trả về true nếu tất cả điều kiện đều thỏa mãn, trả về false khi 1 điiều kiện bị sai
// some(): duyệt qua các phần tử của mảng, trả về true nếu 1 điều kiện đều thỏa mãn, trả về false khi tất cả điiều kiện bị sai

const result = scores.every((score)) => score >= 5;

console.log("result: ", result);

// Bài toán: tính tổng các phần tử trong mảng numbers

let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numberss[i];
}

// khi i = 0 => total = 0 + 1 = 1
// khi i = 1 => total = 1 + 2 = 3
// khi i = 2 => total = 2 + 3 = 5

// reduce(): duyệt qua các ơhaanf tử của mảng , trả về 1 giá trị duy nhất
const resulttotal = numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 0);)

console.log("resultTotal: ", resultTotal);