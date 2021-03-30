// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity=`go to the office`) {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(str="*") {
    return function(adj="special") {
        return `You are ${str}${adj}${str}!`
    }
}

const Calculator = {
    add: (function(num1, num2) {
        return num1 + num2
    }),
    subtract: (function(num1, num2) {
        return num1 - num2
    }),
    multiply: (function(num1, num2) {
        return num1 * num2
    }),
    divide: (function(num1, num2) {
        return num1 / num2
    })
}

function actionApplyer(i, arr) {
    if (arr.length == 0) {
        return i
    } else {
        arr.forEach(element => {
            i = element(i)
        });
    }
    return i
}