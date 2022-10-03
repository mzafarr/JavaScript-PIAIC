const places = ['Makkah', 'Madina', 'Gilgit', 'Azad Kashmir', 'New York']

console.log(`original array: ${places}`)

const ascendingOrder = [...places]
ascendingOrder.sort()
console.log(`ascending ordered array: ${ascendingOrder}`)
console.log(`original array: ${places}`)

const descendingOrder = [...places]
descendingOrder.sort().reverse()
console.log(`descending ordered array: ${descendingOrder}`)
console.log(`original array: ${places}`)

places.sort()
console.log(`sorted original array ${places}`)

places.reverse()
console.log(`reverse sorted original array ${places}`)



