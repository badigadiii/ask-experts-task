// let temperature = -11;
// console.log("Сегодня на улице", temperature, "градусов");

// Операторы сравнения
// == - равняется
// != - не равняется
// >, >= - строго больше / не строго больше
// <, <= - строго меньше / не строго меньше

// while, for

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i = i + 1;
// }

// for (let i = 0; i < 10; i += 2) {
//     console.log(i);
// }

// arrays

let arr = [
    1, 2, 3, 4
];

// 1 задача из варианта
let sum = 0;
for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
}
console.log(sum / arr.length);
