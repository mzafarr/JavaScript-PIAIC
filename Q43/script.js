sandwitchSummary = (...args) => {
    console.log(`Your sandwitch will contain following items: `)
    for (item of args) {
        console.log(item)
    }
}
sandwitchSummary('cheese')
sandwitchSummary('cheese', 'extra-spice')
sandwitchSummary('cheese', 'extra-spice', 'extra-chicken')