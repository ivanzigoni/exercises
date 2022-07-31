// const numbers = [11, 15, 7, 2]
// const numbers = [2, 7, 5, 15];
// const target = 9;

const nums = [-1, -2, -3, -4, -5]
const target = -8
// retornar um array com as duas posições do index do array numbers que caso os números correspondentes forem somados, resultam em target





// var twoSums = function (nums, target) {
//     return nums.reduce((acc, value, index) => {
//         if (acc.length < 2) {
//             nums.forEach((item, index2) => {
//                 if ((value + item) === target && index != index2) {
//                     acc.push(index);
//                     acc.push(index2);
//                 }
//             });
//         }
//         return acc;
//     }, []);
// };









// function twoSums(arrayNum, target) {
//     // let outputArray = [];
//     let previousValues = {};

//     return arrayNum.forEach((e, index1) => {
//         let neededValue = target - e;
//         let index2 = previousValues[neededValue];
//         if (index2 != null) {
//             // outputArray.push(index2);
//             // outputArray.push(index1);
//         } else {
//             previousValues[e] = index1;
//         }
//     });

//     // return [index1, index2];
// };




// function twoSums(arrayNum, target) {
//     let previousValues = {};
//     return arrayNum.reduce((output, e, index1) => {
//         let neededValue = target - e;
//         let index2 = previousValues[neededValue];
//         if (index2) {
//             output.push(index2);
//             output.push(index1);
//         } else {
//             previousValues[e] = index1;
//         }
//         return output;
//     }, []);
// };


// console.log(twoSums(nums, target))




// for (let i = 0; i < numbers.length; i += 1) {
//     const currentNumber = numbers[i];
//     const neededValue = target - currentNumber;
//     const index2 = previousValues[neededValue];
//     if (index2 != null) {
//         array.push(index2)
//         array.push(i)
//     } else {
//         previousValues[currentNumber] = i
//     }
// }





let obj = [{
  'teste':{
    id: 'aoksaoke',
    quant: 0
  }
}]



let obj1 = {
  'teste':{
    id: 'aoksaoke',
    quant: 0
  }
}


if (obj.includes(obj1.teste.id)) {
  console.log('oi')
}






// let array = [];
// numbers.forEach((el, i) => {
//     if (target - el >= 0) {
//         let secondNumber = numbers.find(e => {
//             return e === target - el;  
//         })
//         let secondIndex = numbers.findIndex(e => e === secondNumber);
//         let firstIndex = i
//         if (secondIndex >= 0) {
//             array[0] = secondIndex;
//             array[1] = firstIndex;
//         }
//     }
// })

// console.log(array)



// let secondIndex = numbers.findIndex(e => e === secondNumber);
// let firstIndex = numbers.findIndex(e => e === element);


