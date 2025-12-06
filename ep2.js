// let score = 10
// let result
// if (score > 50){
//     result = "pass"
// }else{
//     result = "fall"
// }
// console.log(result);

// result = (score > 50) ? "pass" : "fail"
// console.log(result);

// let age = 19
// if (age > 15){
//     if (age == 16){
//         console.log('g.10')
//     }else if (age == 17){
//         console.log('g.11')
//     }else if (age == 18){
//         console.log('g.12')
//     }else{
//         console.log('out of range')
//     }
// }else{
//     console.log('ม.ต้น');
// }

// let month = 5
// switch (month){
//     case 1: console.log('january');
//         break
//     case 2: console.log('febuary');
//         break
//     case 3: console.log('march');
//         break
//         default : console.log('no month found');
// }

// let light = 9
// let result = ''
// switch (light){
//     case 1: result = 'open light'
//         break
//     case 0: result = 'close light'
//         break
//     default : result = 'no data found'
// }
// console.log(result);

//while
//ex1
// let count = 3
// while (count <= 3){
//     console.log('hello world');
//     count++
// }

//ex2
let count = 1
while (count <= 5){
    console.log('ขึ้นที่ :', count);
    if (count == 3){
        break
    }
    count++
}