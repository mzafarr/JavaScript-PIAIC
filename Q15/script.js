let friends = ['Nouman', 'Saeed', 'Ahmed']

console.log('I found a bigger dinner table')

friends.unshift('Tuaha') //add in start of array
friends.push('Abdullah') //add in end of array
friends.splice(friends.length / 2, 0, 'Umar') //add in mid of array


friends.forEach(friend => {
    console.log(`Dear ${friend}, I would like to invite you for dinner tomorrow night`)
})
