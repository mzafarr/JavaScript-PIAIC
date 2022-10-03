function make_shirt(size = 'large', message) {
    if (size == 'large' || size == 'medium') {
        console.log(`I love JavaScript`)
    }
    else {
        console.log(message)
    }
}
make_shirt('medium')