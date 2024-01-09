  const fs=require("fs");

     function one(){

        return new Promise((resolve,reject)=>{
 
                fs.readFile("./read.txt",'utf8',(err,data)=>{
                         console.log("inside from promise"); 
                          resolve(data);  
                })

        })
 
     }

         one().then((data)=>{
               console.log(data);
         })

console.log("kapil kant!");