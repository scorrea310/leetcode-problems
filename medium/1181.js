// COMPLETED ✅

var beforeAndAfterPuzzles = function (phrases) {

    let setty = new Set()

    // don't repeat when looping.

    for (let i = 0; i < phrases.length; i++) {
        for (let j = i + 1; j < phrases.length; j++) {


            if (setty.has(`${i} ${j}`) === false && setty.has(`${j} ${i}`) === false) {    // is making sure that indexs in both orders do not already exist in object. 

                let string1 = phrases[i].split(" ")
                let string2 = phrases[j].split(" ")


                if (string1[string1.length - 1] === string2[0]) {

                    setty.add(`${i} ${j}`)
                }

                if (string2[string2.length - 1] === string1[0]) {

                    setty.add(`${j} ${i}`)

                }

            }
        }
    }

    let arrayOfIndexes = Array.from(setty)


    let finalArray = []

    /*--------------------------------------------------------------------*/

    for (let i = 0; i < arrayOfIndexes.length; i++) {

        let firstNum = arrayOfIndexes[i].split(" ")[0]
        let index1 = phrases[parseInt(firstNum)].split(" ")

        index1.pop()


        let secondNum = arrayOfIndexes[i].split(" ")[1]
        let index2 = phrases[parseInt(secondNum)].split(" ")


        let finalString = [...index1, ...index2]


        finalArray.push(finalString.join(" "))


    }

    setty = new Set()

    finalArray.sort().forEach((ele) => {
        setty.add(ele)
    })

    finalArray = Array.from(setty)

    return finalArray

};

//Space and Tiem Complexity analysis.





//TESTING BELOW
/*--------------------------------------------------------------------*/
console.log(beforeAndAfterPuzzles(["mission statement", "a quick bite to eat", "a chip off the old block", "chocolate bar", "mission impossible", "a man on a mission", "block party", "eat my words", "bar of soap"]))
console.log(beforeAndAfterPuzzles(["wmppyzxj dyhpqzmz rworyro ztro bm y ovzmude xumvz gg x odsinz a hos", "qupwx y dyhpqzmz dyhpqzmz xumvz hos y x",
    "odsinz ztro y czkooc xumvz", "jeep rworyro xnihmmgt", "ovzmude rukex a gg y xnihmmgt xnihmmgt a ztro x gg x ey jeep hos y ztro xumvz xumvz x ovzmude ey",
    "rayusnm x", "xumvz jeep odsinz rworyro hos rukex dyhpqzmz x ey x", "czkooc bm x dyhpqzmz wmppyzxj gg",
    "jeep hos a hos bm czkooc rworyro xumvz dyhpqzmz dyhpqzmz ey dyhpqzmz", "dyhpqzmz ovzmude ey xumvz xumvz xumvz rukex qupwx hos rukex bm",
    "gg hos y", "bm qupwx jeep", "xumvz a bm rayusnm xumvz wmppyzxj rukex ey gg xnihmmgt ey ey dyhpqzmz hos rworyro", "gg ey wmppyzxj a", "y odsinz xumvz",
    "czkooc bm ey y ey ey xnihmmgt hos ovzmude ztro ztro rayusnm", "ovzmude gg x rworyro ztro ey x",
    "y xnihmmgt czkooc czkooc a rayusnm czkooc a xnihmmgt czkooc rayusnm xumvz hos",
    "a rukex y czkooc ey qupwx rukex hos rukex bm xnihmmgt odsinz jeep xnihmmgt hos x jeep xumvz hos x", "ovzmude hos"]))
