

function calculateVAT(amount){
     
     if(amount <=0 || typeof amount !== 'number'){
          return 'Invalid'  
     }
     
     const vatPercentage = 7.5 ;
     const vat = amount*vatPercentage/100;
     return vat;
}
// console.log(calculateVAT(1500))


function validContact(number){
     if(typeof number !== 'string' ){
          return 'Invalid'
     }
     
     if(number.length !== 11 || number[0] !== '0' || number[1] !== '1' || number.includes(' ')){
          return false;
     }

     for (let i = 0; i < number.length; i++) {
          if (isNaN(Number(number[i]))) {
               return false;
          }
      }

     return true;

}

// console.log(validContact("01819334a67"))


