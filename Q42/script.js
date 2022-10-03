const names = ['name1', 'name2', 'name3']

make_great = ([...names]) => {
    let arr = []
    for (name of names) {
        arr.push(`great ${name}`)
    }
    return arr
}

show_magicians = (names) => {
    names.forEach(name => {
        console.log(name)
    })
}
const modified = make_great(names)
console.log(`modified array:`)
show_magicians(modified)

console.log(`original array:`)
show_magicians(names)