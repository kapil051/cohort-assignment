const express=require("express");
const zod=require("zod");
const jwt = require('jsonwebtoken');
const jwtPassword = "secret";

   const emailSchema=zod.string().email();
   const passwordSchema=zod.string().min(6);

function signJwt(username, password) {

       let res1= emailSchema.safeParse(username);
       let res2= passwordSchema.safeParse(password);

       if(res1.success&&res2.success){

         let token=jwt.sign({
            username
         },jwtPassword);

            return token;

       }else{
         return null;
       }
}

function verifyJwt(token) {

         let ans=true;

        try{
            let verifyToken=jwt.verify(token,jwtPassword);
        }catch(e){
             ans=false;
        }
    
           return ans;
}

function decodeJwt(token) {
     
       let decodedToken=jwt.decode(token,jwtPassword);

          if(decodedToken){
            return true;
          }else{
            return false;
          }

}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}