let friends = ['Nouman', 'Saeed', 'Ahmed', 'Umar', 'Abdullah']

console.log('I can invite only 2 friends')

if (names > 2) {
    const friendNotInvited = names[names.length - 1]
    names.pop()
    console.log(`Dear ${friendNotInvited}, I am sorry, you are not invited to the dinner`)
}
friends.forEach(friend => {
    console.log(`Dear ${friend}, I would like to invite you for dinner tomorrow night`)
})
