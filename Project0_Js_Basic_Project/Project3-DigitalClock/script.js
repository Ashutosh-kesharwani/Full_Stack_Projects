
// html ele jisme ye show karana hai 
const clockVar= document.querySelector('#clock');

// console.log(currTimeVar); ye curr time de dega

// but for showing continuous sec update like actual watch use setInterval func
//delay val=1000milisec=1sec means har sec update the value

setInterval(function(){
// ye time yhi pe cal karo otherwise ye continuous me nhi chlega 
const currDateVar= new Date();
const currTimeVar= currDateVar.toLocaleTimeString();
clockVar.innerHTML= `${currTimeVar}`;
},1000)
