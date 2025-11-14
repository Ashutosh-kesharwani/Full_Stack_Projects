// Project1-Code

function clickBox(){
    const boxes= document.querySelectorAll('.box');
    const bodyTag= document.querySelector('body');
    boxes.forEach(function(box){
      box.addEventListener('click',function(e){
        const particularBoxId= e.target.id
        if(particularBoxId=='gray') 
            bodyTag.style.backgroundColor=e.target.id;

        if(particularBoxId=='purple') bodyTag.style.backgroundColor=e.target.id;

        if(particularBoxId=='blue') bodyTag.style.backgroundColor=e.target.id;

        if(particularBoxId=='yellow') bodyTag.style.backgroundColor=e.target.id;

      },false);

    })
}
clickBox();

//Same Code Using Switch Statement
// const boxes= document.querySelectorAll('.box');
// const body= document.querySelector('body');
// boxes.forEach(function(box){
//    box.addEventListener('click',function(e){
//     const particularBoxId= e.target.id
//    switch(particularBoxId){
//     case "gray": body.style.backgroundColor= e.target.id;//This is more better Hard-Coded Value // Instead if direct writing the value"#808080";
//         break;
//     case "white":body.style.backgroundColor=e.target.id;
//         break;
//     case "blue":body.style.backgroundColor=e.target.id;
//         break;
//     case "yellow":body.style.backgroundColor=e.target.id;
//         break;
//    }
//    })
// })