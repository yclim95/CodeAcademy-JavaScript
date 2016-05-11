var user=prompt("Question to the user").toUpperCase();

switch(user){
 case 'A': 
     if(user==='A'&&user==='a')
     {
       console.log("Is a complete A");   
     }
     else{ console.log("Not a complete A");
     }
     break;
 case 'B':
     if(user==='B'||user==='b')
     {
      console.log("Is a B");   
     }else{
         console.log("Is not a B");
     }
     break;
  case 'C':
      console.log("C");
      break;
   case 'D':
       console.log("D");
        break;
        
   default: 
        console.log("Other");
    
}
