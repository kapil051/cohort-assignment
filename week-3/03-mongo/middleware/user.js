
const {User}=require("../db/index.js");

async function userMiddleware(req, res, next) {
  
       let username=req.headers.username;
       let password=req.headers.password;

          //  console.log(username,password);

       try{

        let user=await User.findOne({
            username,
            password,
         })

           //  console.log(user);
           
            if(user){
               next();
            }else{
              res.json({
                 msg:"user not present in db",
              })
            }
       }catch(e){
               console.log(e);
             res.json({"msg":"error from catch block"});
       }

}

module.exports = userMiddleware;