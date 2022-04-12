const numberArray = [12, 26, 35, 44, 69, 109]
const numberArrayTwo = [11, 27, 44, 76, 88, 92]
const numberArrayThree = [8, 44, 57, 88, 95, 111]

const compareThreeArrays = (arrayOne, arrayTwo, arrayThree) => {
    for (i = 0; i < arrayOne.length; i++) {
        for (k = 0; k < arrayTwo.length; k++) {
            for (j = 0; j < arrayThree.length; j++) {
                if (arrayOne[i] === arrayTwo[k] && arrayOne[i] === arrayThree[j]) {
                    console.log(arrayOne[i], arrayTwo[k], arrayThree[j])
                }
            }
        }
    }
}

// compareThreeArrays(numberArray, numberArrayTwo, numberArrayThree)

const array1 = [13, 65, 44, 78, 10]
const array2 = [11, 67, 45, 90, 101, 4]
const array3 = [11, 67, 45, 90, 101, 4]
const array4 = [11, 67, 45, 90, 101, 4]

const returnSum = (array) => {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum
}

const sumArrays = (...args) => {
    let sum = 0

    for (let i = 0; i < args.length; i++) {
        sum = sum + returnSum(args[i])
    }

    return sum
}

console.log(sumArrays(array1, array2, array3, array4))