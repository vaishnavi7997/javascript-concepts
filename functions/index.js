function greet(name) {
     console.log(`hello ${name}`);
}
 greet("sita");


 function add(num1, ...restOftheParameters) {
   console.log(restOftheParameters)
    return num1 + num2;
              
 }
 const result = add(10, 20, 30 , 40);
 console.log(result);


  //Function Arguments
  
 console.log(
   multiplication(10, 20, 30, 40, function (msg) {
      console.log("Iam calling");                    
      console.log(msg);
   })
 );


 //Function returs from Function
 
 console.log("my function");           
 function myDetails() {
   function myFunction() {
      return ;
   }
   return myFunction;
 }

 const myresult = myDetails();
 console.log(myresult());