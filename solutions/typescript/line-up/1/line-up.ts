export function format(name:string, number:number) {
  let suffix :string;

  if(number %100 >=11 && number % 100 <=13){
    suffix ="th"
  } else{
    switch(number %10){

      case 1: 
        suffix="st";
        break;
      case 2:
        suffix="nd";
        break;

      case 3:
        suffix = "rd";
        break;
      default:
        suffix ="th"; 
    }    
  }
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
      
}


console.log(format("Mary", 1));
// Mary, you are the 1st customer we serve today. Thank you!

console.log(format("John", 12));
// John, you are the 12th customer we serve today. Thank you!

console.log(format("Dahir", 162));
// Dahir, you are the 162nd customer we serve today. Thank you!