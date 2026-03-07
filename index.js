const arr1 = [1, -2, 3, -4, 5, -6];

function mulOfArray(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i] >= 0) {
            result = result * arr[i];
        }
    }

    return result;
}

const arr1Result = mulOfArray(arr1);
console.log(arr1Result);