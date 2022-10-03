carInfo = (manufacturer, modelName, ...args) => {

    return {
        manufacturer: manufacturer,
        modelName: modelName,
        ...args
    }
}
console.log(carInfo('honda', 'civic', color = 'white', year = '2021'))