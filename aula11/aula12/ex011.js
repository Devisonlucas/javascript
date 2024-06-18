var idade =88 
console.log(`você tem ${idade} anos`)
if (idade <16) {
  console.log('Não vota')
  
}else if(idade <18 || idade > 65){
  console.log('voto é opcional')
}else if(idade > 18) {
  console.log('voto é obrigatório')
}

var idade = 44

if (idade <16) {
  console.log('Não vota')
}else if (idade < 18 || idade > 65){
  console.log('Voto é opcional')
}else if (idade > 18){
  console.log('Voto é obrigatório')
}