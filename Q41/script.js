const names = ['name1', 'name2', 'name3']

make_great = (names) => {
    for (nameIndex in names) {
        names[nameIndex] = `great ${names[nameIndex]}`
    }
}

show_magicians = (names) => {
    names.forEach(name => {
        console.log(name)
    })
}
make_great(names)
show_magicians(names)