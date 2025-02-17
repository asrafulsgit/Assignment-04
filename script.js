

function calculateVAT(amount){
     
     if(amount < 0 || typeof amount !== 'number'){
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


function willSuccess(results){
     let passedSubjects = 0;
     let failedSubjects = 0;
     if(!Array.isArray(results)){
          return 'Invalid';
     }
     for (let i = 0; i < results.length; i++) {
          if (typeof results[i] !== 'number') {
               return false;
          }
          if(results[i] < 50){
               failedSubjects++
          }else{
               passedSubjects++
          }
     }

     if(passedSubjects > failedSubjects){
          return true;
     }

     return false;
     
}
// console.log(willSuccess([60, 70, 80, 40, 30]))



function validProposal(male,female){
      
      if(typeof male !== 'object' || typeof female !== 'object'){
          return 'Invalid'
      }
      if(Array.isArray(male) ||  Array.isArray(female)){
          return 'Invalid'
      }
      const ageDiference = Math.abs(male.age - female.age)
      if(ageDiference > 7 || male.gender === female.gender){
          return false;
      }

      return true;
      
}
// console.log(validProposal({ name: "toya", gender: "female", age: 24 },
//      { name: "bjoy", gender: "male", age: 32 }))


function calculateSleepTime(secondsInArry){
     let timeInSeconds = 0;
     if(!Array.isArray(secondsInArry)){
          return 'Invalid'
     }
     for(let time of secondsInArry){
          if(typeof time !== 'number'){
               return 'Invalid'
          }
          timeInSeconds += time
     }
     const hours = Math.floor(timeInSeconds / 3600); 
     const minutes = Math.floor((timeInSeconds % 3600) / 60); 
     const seconds = timeInSeconds % 60; 
     return { hour: hours , minute: minutes , second: seconds } ;
}
console.log(calculateSleepTime([100, 3800, "90" ]))
