// const does not allow the vairable to be changed
const str = "This is a string"

// let allows the variable to be changed
let changing = "string to be changed"
// console.log(changing)

changing = "I CHANGED THIS STRING"
// console.log(changing)

const num = 5
const num2 = 7

// console.log(num + num2)

// an array is a way to store multiple piece of data in a single variable
const arr = ["word one", "word two", "word three", 1, 2, 3]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[4])

const obj = {
    "firstname": "dylan",
    "lastname": "drechsel",
    "address": "127 north livingston avenue",
    "age": 29 
}

// console.log(obj.firstname)

const bookObj = {
    "book1": "of mice and men",
    "book2": "minecraft"
}

bookObj.book3 = "world of warcraft"

// console.log(bookObj)

const objArr = [
    {
        "firstname": "dylan",
        "lastname": "drechsel",
        "status": "nerd"
    },
    {
        "firstname": "joseph",
        "lastname": "chong",
        "status": "asian nerd"
    },
    {
        "firstname": "captain",
        "lastname": "big cock",
        "status": "pirate"
    }
]

console.log(objArr[1].firstname)
console.log(objArr[1].lastname)

console.log(`my first name is ${objArr[1].firstname} and my last name is ${objArr[1].lastname}`)

