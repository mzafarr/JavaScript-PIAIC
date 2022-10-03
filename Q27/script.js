function checkStageOfLife(age) {
    if (age < 2) {
        console.log('baby')
    }
    else if (age < 2) {
        console.log('baby')
    }
    else if (age >= 4 && age < 13) {
        console.log('kid')
    }
    else if (age >= 13 && age < 20) {
        console.log('teenager')
    }
    else if (age >= 20 && age < 65) {
        console.log('adult')
    }
    else if (age > 65) {
        console.log('elder')
    }
}
const myAge = 18
checkStageOfLife(myAge)