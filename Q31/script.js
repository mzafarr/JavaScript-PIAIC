const current_users = ['zafar', 'ahmed', 'umar', 'nouman', 'admin']
const new_users = ['daniyal', 'ali', 'ahmed', 'nouman', 'abdullah']

for (currentUser of current_users) {
    for (newUser of new_users) {
        if (currentUser.toLoweCase() == newUser.toLoweCase()) {
            console.log('enter a new username, it is already being used')
        }
        else {
            console.log('username is available')
        }
    }
}
