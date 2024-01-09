const fs=require("fs");


   function one(){

       return new Promise((resolve,reject)=>{

        
       })

   }

    fs.readFile("./read.txt",'utf-8',(err,data)=>{
               data=data+" some content added";
                         console.log(data);
                 fs.writeFile('./read.txt',data,'utf8',(err)=>{
                        console.log("file write succcessfully");
                 })
                
    })

