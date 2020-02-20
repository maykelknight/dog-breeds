export default function createNumbersArray(numbersToGenerate) {
    let options = [];
    for (let i = 1; i <= numbersToGenerate; i++) {
        options.push(i)
    }
    return options;
}