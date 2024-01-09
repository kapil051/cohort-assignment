const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");

const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {

      let username=req.body.username;
      let password=req.body.password;
  
          let findUser=await Admin.find({
              username,
              password,
           })

           if(findUser.length>0){
              res.json({
                 msg:"user already present in db",
              })
           }else{

            try{
                await Admin.create({
                    username,
                    password,
                 })

                 res.json({
                    msg:"Admin Created successfully",
                 })

             }catch(e){
                res.json({
                    msg:"error in inserting admin in db",
                 })
             }

           }

           

});

//Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }

router.post('/courses', adminMiddleware, async(req, res) => {

      let username=req.headers.username;
      let password=req.headers.password;

        

      let title=req.body.title;
      let description=req.body.description;
      let price=req.body.price;
      let imageLink=req.body.imageLink;

         try{
           await Course.create({
               title,
               description,
               price,
               imageLink
           })
           res.json({
            "msg":"course created successfully",
           })
         }catch(e){
            res.json({
               "msg":"error in posting the course",
              })
         }

});

router.get('/courses', adminMiddleware, async(req, res) => {
  
      try{
          let allCourses=await Course.find({});
            res.json({
                allCourses,
            })
      }catch(e){
          console.log("error to find all the courses");
      }

});

module.exports = router;