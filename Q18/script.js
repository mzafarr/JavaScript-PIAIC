friends = ['Nouman', 'Saeed', 'Ahmed']
const friendNotComing = 'Saeed'

console.log(`${friendNotComing} won't be able to come`)

const indexOfNotComing = friends.indexOf(friendNotComing)
friends.splice(indexOfNotComing, 1)
friends.unshift('Tuaha')

friends.forEach(friend => {
    console.log(`Dear ${friend}, I would like to invite you for dinner tomorrow night`)
})

console.log(`I am inviting ${friends.length} people`)