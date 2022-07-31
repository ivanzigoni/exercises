
let array = [1, 4, 5, 6, 3, 14, 2];


function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                // let temp = arr[j]
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// console.log(bubbleSort(array));

// [array[0], array[1]] = [array[1], array[0]]
// console.log(array);


let array2 = [[1, 2], [3, 4]]

let [[s1, s2]] = array2;

console.log(s1)