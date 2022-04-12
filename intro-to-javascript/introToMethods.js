const arrBegining = [1, 2, 3]
const arrEnd = [4, 5, 6]

const joinTwoArrays = (arrayOne, arrayTwo) => {
    return arrayOne.concat(arrayTwo)
}

// console.log(joinTwoArrays(arrBegining, arrEnd))

const arrayForIndexOf = ["joe", "dylan", "dan", "seth"]

const findIndexOf = (array, value) => {
    const answer = array.indexOf(value)
    console.log(answer)

    if (answer !== -1) {
        console.log(`This array has ${array[answer]} in it`)
    }

    if (answer === -1) {
        console.log(`This array does not have ${value} in it`)
    }
}

// findIndexOf(arrayForIndexOf, "dan")
// findIndexOf(arrayForIndexOf, "daniel")

const arrayABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

const printArray = (array) => {
    array.forEach((element) => {
        if (element === 'f') {
            console.log(element)
        }
    })
}

// printArray(arrayABC)

const numberArray = [12, 56, 78, 34, 55, 25, 37, 99, 16, 4, 88, 34, 27]

const filterAndSortArray = (array) => {
    const result = array.filter(number => number > 50)
    result.sort(function(a, b) {
        return a - b;
      })
    console.log(result)
}

// filterAndSortArray(numberArray)

const arrayForPop = ["joe", "dylan", "dan", "seth"]
const arrayForPopFamily = ["doug", "dylan", "daniel", "rosanne"]


const PopFromArray = (array) => {
    array.forEach((element) => {
        array.pop()
    })

    console.log(array)
}

PopFromArray(arrayForPop)
// PopFromArray(arrayForPopFamily)
// PopFromArray(numberArray)

