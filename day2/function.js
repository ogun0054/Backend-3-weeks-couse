//Argument Function
function func(){
    console.log(arguments)
   }
   
//    func(1,2,3,4,5,6,7,8,9,0)
   



// Arrow function


// function without parameter

const greet = () => console.log("You are welcome")


   // function with parameter
   const Calc = (a,b) => console.log(a+b);

   const process = (x,y) =>{
      return x/y
   }

   console.log(process(15,3))
   
   //Calc(7,9)

   /**
    * Note: Arrow function do not get agument when the the function is "Argument function"
    */

   // IIFE- Immediately Invoked Function Expression

  (function(){
     console.log("Hello Students")
   })()

   //Anonymous function

   