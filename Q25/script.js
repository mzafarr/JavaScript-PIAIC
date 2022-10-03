function checkAlienColor() {
    if (alien_color == 'green') {
        console.log('player earned 5 points')
    }

    else {
        console.log('player earned 10 points')
    }
}
let alien_color = 'green'
checkAlienColor(alien_color)

alien_color = 'red'
checkAlienColor(alien_color)
