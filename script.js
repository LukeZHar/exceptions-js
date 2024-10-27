function subtract(num1, num2) {
    let answer

    try {
        answer = num1 - num2
        if (isNaN(answer)) {
            throw "Invalid Answer"
        }
        return answer
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

console.log(subtract(10, 5))
console.log(subtract(5, "Hello"))