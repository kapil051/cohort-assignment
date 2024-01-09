const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async(req, res) => {
      let username=req.body.username;
      let password=req.body.password;

         let userAlready=await User.findOne({
              username,
              password,
         })

            if(userAlready){
                res.json({
                    "msg":"user already present in db",
                })
            }else{

         try{

               let user=await User.create({
                username,
                password,
               })

                  if(user){
                        res.json({
                            "msg":"user inserted successfully",
                        })
                  }else{
                    res.json({
                        "msg":"user not inserted successfully",
                    })
                  }

         }catch(e){
            res.json({
                "msg":"error from catch",
            })
         }

    }
});

router.get('/courses', async(req, res) => {

       try{
  
        let allCourse= await Course.find({});

          res.json({
            allCourse,
           })

       }catch(e){
           console.log(e);
       }
   

});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {

      let courseId=req.params.courseId;
      let username=req.headers.username;
      let password=req.headers.password;

        //    console.log(courseId);
       
           try{
               await User.updateOne({
                   username,
                   password,
               },{
                    "$push":{
                          purchasedCourses:courseId,
                    }
               })
           }catch(e){
                console.log(e);
           }

          res.json({
            message:"purchase complete",
          })    
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    
       let username=req.headers.username;
       let password=req.headers.password;

         try{

              let user=await User.findOne({
                 username,
                 password,
              })

                if(user){
             
                    let allCourseId=user.purchasedCourses;

                      const courses=await Course.find({
                             _id:{
                                "$in":allCourseId,
                             }
                        })
                    
                     res.json({
                        "allPurchased":courses,
                     })
                }
  
         }catch(e){
              res.json({
                 msg:"error in finding the user courses",
              })
         }

});

module.exports = router