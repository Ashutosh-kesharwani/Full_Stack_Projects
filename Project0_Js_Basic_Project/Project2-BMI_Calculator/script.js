const formTag= document.querySelector('form');


//  const height= parseInt(document.querySelector('#height').value); yha likhne se galat ho jayga as jaise hi form load hoga to empty value store ho jaygi which is wrong , 
// Ham chahte hai ki jaise submit button click kare tab value aaye so iss liye evemtlistener ke andar likh rahe hai


formTag.addEventListener('submit',function(e){
  e.preventDefault(); // Form ka default action hota submit karne pe submit karne ka 


  // To select val of height and weight and .value method to get there value directly and parseInt() to convert value in integer
  const height= parseInt(document.querySelector('#height').value);
  const weight= parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#result')
  const outcome= document.querySelector('#outcome')
  // isNaN(num)  returns True if no. nhi hoga nd false if no. valid hoga
  if(height ==='' || height<0 || isNaN(height)){
    results.innerHTML= `Please give valid height ! ${height}`;
  }
  else if (weight ==='' || weight<0 || isNaN(weight)) {
    results.innerHTML= `Please give valid Weight! ${weight}`;
  } else{
   const bmi=(weight / ((height*height)/10000)).toFixed(2)

   // For Showing the calculated Results:
   results.innerHTML=`<span>Your BMI is: ${bmi}</span>`;

    if(bmi<18.6) outcome.innerHTML='You are Under Weight!!';
    else if(bmi>=18.6 && bmi<=24.9) outcome.innerHTML='You are Under Normal Range';
    else  outcome.innerHTML='You are Over-Weight!!';
 
  }
});