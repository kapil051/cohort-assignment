const mongoose = require('mongoose');

// Connect to MongoDB

     async function connectTodb(){

           try{
             let res=await mongoose.connect('mongodb+srv://kapilkant471:sWj5QWdZLGnNiuUM@cluster0.ydywfcx.mongodb.net/mongoAssignment');
                    console.log("connected to database successfully");
           }catch(e){
              console.log("error in connect to db", e);
           }

      }

      connectTodb();


// Define schemas
const AdminSchema = new mongoose.Schema({
     username:String,
     password:String,
    
});

const UserSchema = new mongoose.Schema({
      username:String,
      password:String, 
      purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});


const CourseSchema = new mongoose.Schema({
     title:String,
     description:String,
     price:Number,
     imageLink:String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}