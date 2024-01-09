import { useMemo, useState} from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {

    const [input, setInput] = useState(0);
   // const [factorial,setFactorial]=useState(0);


       const factorial=useMemo(()=>{

           let temp=1;

              for(let i=1;i<=input;i++){
                   temp*=i;
              }
              
          return  temp;
       },[input]);
     

    
    // function valueChanged(e){
         
    //     setInput(e.target.value);
    //             let temp=1;
    //           for(let i=1;i<=e.target.value;i++){
    //                temp*=i;
    //           }
    //      setFactorial(temp);      
    //   }

        function  valueChanged(e){
               setInput(e.target.value);
        }
   

    return (
        <div>
            <input 
                   type="number"
                   placeholder="input"
                 onChange={valueChanged} 
            />
            <p>Calculated Value: {factorial}</p>
        </div>
    );
}


// valueChanged=useMemo((e)=>{
//       setInput(e.target.value);

//           for(let i=1;i<=input;i++){
//                expensiveValue*=i;
//           }

// })