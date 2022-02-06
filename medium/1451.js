// COMPLETED ✅


var arrangeWords = function (text) {

    let textArray = text.split(" ")

    let finalArray = [];

    let currentWord = textArray[0]
    let lowIndex = 0

    while (textArray.length > 0) {

        for (let i = 0; i < textArray.length; i++) {
            if (textArray[i].length < currentWord.length) {
                currentWord = textArray[i]
                lowIndex = i
            }
        }


        finalArray.push(textArray[lowIndex].toLowerCase())
        textArray.splice(lowIndex, 1)

        currentWord = textArray[0]
        lowIndex = 0

    }

    finalArray[0] = finalArray[0].charAt(0).toUpperCase() + finalArray[0].slice(1);

    return finalArray.join(" ")

}

/*
TIME AND SPACE COMPLEXITY ANALYSIS

TIME: Should be O(n^2) because we have a for loop nested inside of while loop right?
Will have to confirm this.


*/








//testing
/*--------------------------------------------------------------------*/
console.log(arrangeWords("To be or not to be"))
