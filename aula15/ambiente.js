let num = [3, 5, 7, 9]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor possui ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
let pos = num.indexOf(1)
if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`${pos}`)
}