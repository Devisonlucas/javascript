let num = [5,8,9,3]
num.sort()
num.push(2)
console.log(num)
console.log(`o vetor tem ${num.length} posições `)
console.log(num[0])
let pos = num.indexOf(4)
if (pos == -1) {
console.log('O valor não foi encontrado')
}else {
console.log(`O valor 8 está na posição ${pos}`)
}
