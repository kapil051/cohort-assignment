// Middleware for handling auth

const {Admin}=require("../db/index.js");

async function adminMiddleware(req, res, next) {


        let username=req.headers.username;
        let password=req.headers.password;

        try{

            let user=await Admin.findOne({
               username,
               password,
            })
   
              if(user){
                  next();
              }else{
                res.json({"msg":"user is not present in db"});
              }
   
          }catch(e){
                 console.log(e);
                 res.status(501).json({
                      "msg":"internal server error",
                 })
          }

}

module.exports = adminMiddleware;