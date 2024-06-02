function randomIndexGenerator(start, end) {
    return Math.floor(Math.random() * (end - start) + start)
}

module.exports = {
    randomIndexGenerator
}