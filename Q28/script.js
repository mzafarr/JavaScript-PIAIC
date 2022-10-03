function checkFruit(fruit) {
    if (fruit == 'apple') {
        console.log('You really like apples')
    }
    if (fruit == 'banana') {
        console.log('You really like banana')
    }
    if (fruit == 'oranges') {
        console.log('You really like oranges')
    }
    if (fruit == 'apricot') {
        console.log('You really like apricot')
    }
    if (fruit == 'mango') {
        console.log('You really like mango')
    }
}
const fruits = ['mango', 'oranges', 'apricot', 'banana']
fruits.forEach(fruit => checkFruit(fruit))