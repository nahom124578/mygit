 require('dotenv').config();
const express = require('express'); //we want the module express and dotenv
// const connectDB = require('./server/config/db')
const cors = require('cors')
const UserModel = require('./server/model/postInfo')
const ImageModel = require('./server/model/imageReport')
const multer = require('multer') 
const path = require('path')

const apps = express(); //creating express application
apps.use(cors())
apps.use(express.json())
//assigning a port =
const PORT = 3003|| process.env.PORT; //this sets up the port for our application
//The or is nothing
//connnecting to database
// connectDB();

const storage = multer.diskStorage(
  {
    destination: (req, file, cb) => {
      cb(null, './server/Public/images') //first parameter is an error
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
  }
)

const upload  = multer({
  storage: storage
})
//for the radiologist image
apps.post('/api/uploadRadImage',upload.single('image'), async (req, res) => {
  try {
    const image = req.file
    const imageUrl = `./server/Public/images/${image.filename}`

    const newDetail = new ImageModel ({
      image: imageUrl,
      details: req.body.details
    })

    await newDetail.save()
  }
  catch(err) {
    console.log(err)
  }
})


apps.put('/api/updateApp/:upId', async (req, res) => {
    const { upId } = req.params;
    const updatedData = req.body;
    console.log(updatedData)  

    try {

      const user = await UserModel.findByIdAndUpdate(upId, updatedData, { new: true }); 
      console.log(user)
      if (!user) {
        console.log(upId)
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Error updating user' });
    }
  });

apps.post('/api/posts', async(req, res) => {
   try {
    const AppDetail = new UserModel(req.body)
    const newPost = await AppDetail.save()  
    const newPostID = newPost._id
    res.status(201).json({ message: 'Post created successfully', postId: newPostID });

   }
   catch {
    console.log('Error posting the Appointment Detail')
   }
})
apps.delete('/api/deleteApp/:id', async(req, res) => {
    const {id} = req.params
    try {
     await UserModel.findByIdAndDelete(id)
     res.status(201).json({ message: 'Cancelled successfully'});
    }
    catch {
     console.log('Document not found')
    }
 })
//  const PORT = 3003;
 apps.listen(PORT, () => {
   console.log(`App listening on port ${PORT}`);
 });

module.exports= apps;