function checkAlienColor(alien_color) {
    if (alien_color == 'green') {
        console.log('player earned 5 points')
    }

    else if (alien_color == 'yellow') {
        console.log('player earned 10 points')
    }

    else if (alien_color == 'red') {
        console.log('player earned 15 points')
    }
}
let alien_color = 'green'
checkAlienColor(alien_color)

alien_color = 'red'
checkAlienColor(alien_color)

alien_color = 'yellow'
checkAlienColor(alien_color)

