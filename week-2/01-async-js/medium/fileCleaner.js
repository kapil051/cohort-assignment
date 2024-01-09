const fs=require("fs");

fs.readFile("./read.txt",'utf-8',(err,data)=>{
        console.log(data);     
    let cleanData= data.replace(/\s+/g, ' ');
     fs.writeFile('./read.txt',cleanData,'utf-8',()=>{})
})
