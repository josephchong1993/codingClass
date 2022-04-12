// create a function that takes two numbers and returns the sum
const addition = (num1, num2) => {
    const sum = num1 + num2
    return sum
}

function addition (number1, number2) {
    const sum = number1 + number2
    return sum
}

// console.log(addition(1, 5))

const multiplaction = (num1, num2) => {
    if (num1 === 0 || num2 === 0) {
        return 0
    }

    const sum = num1 * num2
    return sum
}

// console.log(multiplaction(0, 1))

const division = (num1, num2) => {
    if (num2 === 0) {
        return undefined
    }

    const sum = num1 / num2
    return sum
}
