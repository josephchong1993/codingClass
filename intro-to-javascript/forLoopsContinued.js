const countToTen = () => {
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
}

// countToTen()

const countToTenOdd = () => {
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 1) {
            console.log(i)
        }
    }
}

// countToTenOdd()

const arr = ["White Widow", "Grand Daddy Purp", "OG Kush", "Mr.Nice Guy", "Green Crack"]
const array = ["White Widow", "Grand Daddy Purp", "OG Kush"]

const findGrandDaddyPurp = (weedArray) => {
    for (let i = 0; i < weedArray.length; i++) {
        if (weedArray[i] === "Grand Daddy Purp") {
            console.log(weedArray[i])
        }
    }
}

// findGrandDaddyPurp(arr)

const randomNumbers = [1, 6, 24, 74, 165, 222]
const chosenNumbers = [5, 13, 36, 74, 264, 645]

const compareNumberArrays = (arrayOne, arrayTwo) => {
    for (let i = 0; i < arrayOne.length; i++) {
        console.log(`Array One: ${arrayOne[i]}`)
        for (let k = 0; k < arrayTwo.length; k++) {
            console.log(`Array Two: ${arrayTwo[k]}`)

            if (arrayOne[i] === arrayTwo[k]) {
                console.log('WE HAVE A WINNER')
                console.log(arrayOne[i], arrayTwo[k])
                return
            }
        }    
    }
}

compareNumberArrays(randomNumbers, chosenNumbers)

const statesArray = ["New Jersey", "New York", "Florida", "Maine", "Vermont", "California", "Texas"]
const statesArrayTwo = ["Virgina", "Utah", "New Mexico", "Vermont", "Delaware"]

const compareStateArrays = (stateArrayOne, stateArrayTwo) => {
    for (let i = 0; i < stateArrayOne.length; i++) {
        console.log(`State Array One: ${stateArrayOne[i]}`)
        for (let k = 0; k < stateArrayTwo.length; k++) {
            console.log(`State Array Two: ${stateArrayTwo[k]}`)

            if (stateArrayOne[i] === stateArrayTwo[k]) {
                console.log('WINNER WINNER')
                console.log(stateArrayOne[i], stateArrayTwo[k])
                return
            }
        }
    }
}

// compareStateArrays(statesArray, statesArrayTwo)

// push Method --> Takes a values and appends it into the array
let emptyArr = []

emptyArr.push('HELLO')

// console.log(emptyArr)

// pop Method --> Removes the last element in the array

emptyArr.pop()

// console.log(emptyArr)


let informationArray = ['Joe', "Dylan", "Tabitha", "Esin", "Carlos"]

const pushToArray = (array) => {
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Joe" || array[i] === "Dylan") {
            newArray.push(array[i])
        }
    }

    console.log(newArray)
}

pushToArray(informationArray)