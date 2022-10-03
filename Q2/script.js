const name = 'zaFar'
const nameArr = name.split('')
const lowerCase = name.toLowerCase()
const upperCase = name.toUpperCase()
const titleCase = name[0].toUpperCase() + nameArr.splice(1).join('').toLowerCase()
console.log(`lowercase name: ${lowerCase}\n
uppercase name: ${upperCase}\n
titlecase name: ${titleCase}
`)