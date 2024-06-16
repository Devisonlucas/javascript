var agora = new Date()
var diaSem = agora.getDay() 

diaSem = 4
/* 

    0 = domindo
    1 = segunda
    2 = terça 
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sabado
    */
   switch(diaSem) {
    case 0:
        console.log('domingo')
         break
    case 1: 
       console.log('Segunda')   
         break
    case 2: 
       console.log('Terça')
         break
    case 3: 
       console.log('quarta')  
         break
    case 4:
        console.log('Quinta') 
         break
    case 5:
        console.log('Sexta')   
        break
    case 6:
        console.log('Sabado') 
        break
        default:
            console.log('[Erro] Dia inválido')  
            break

           



   }
    