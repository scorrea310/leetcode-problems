var addTwoNumbers = function (l1, l2) {

    let string1 = ""
    let string2 = ""

    for (let i = l1.length - 1; i >= 0; i--) {
        string1 += l1[i]
    }

    for (let i = l2.length - 1; i >= 0; i--) {
        string2 += l2[i]
    }


    let number1 = parseInt(string1, 10)
    let number2 = parseInt(string2, 10)

    let finalNumber = number1 + number2

    let finalNumberArray = finalNumber.toString().split("")



    let finalString = ""

    for (let i = finalNumberArray.length - 1; i >= 0; i--) {
        finalString += finalNumberArray[i]
    }

    let finalArray = finalString.split("")

    for (let i = 0; i < finalArray.length; i++) {
        finalArray[i] = parseInt(finalArray[i], 10)
    }


    return finalArray
};

l1 = [2, 4, 3]
l2 = [5, 6, 4]


console.log(addTwoNumbers(l1, l2))

let obj = { " ": "space" }
console.log(obj)