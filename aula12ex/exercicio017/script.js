function tabuada() {
var num = document.getElementById('txtn') 
var tab = document.getElementById('seltab')   
if (num.value.length == 0) {
 window.alert('Por favor coloque outro numero')   
   } else {
   var n = Number(num.value)
   var c = 1
   while (c <= 10) {
    var item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    tab.appendChild(item)
    c++
   }
   }

 }

 function tabuada(){
  var n = document.getElementById ('swdswwd')  
  var m = document.getElementById('slkdn')
  if(n.value.length == 0) {
    window.alert('aldskjflad')
  }else {
   var n = Number(num.value) 
   var c = 1 
   while (c <= 10){
    var item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    tab.appendChild(item)
    c++
   }

  }
 }