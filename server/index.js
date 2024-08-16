const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config();
const cors = require('cors')
// const Restaurant = require("./models/Restaurant")
const multer = require('multer');
const generalcontroller = require("./controllers/generalcontroller")

const port = process.env.PORT || 3000


mongoose.connect(process.env.MONGO_URI) 
    .then(()=> app.listen(port,()=> console.log("connected"))) 
    .catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/images') // Where to store the files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // Naming the file
    }
});

const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname,"../client/dist")))
app.use(express.static(path.join(__dirname,"./public")))

app.use(cors({
    origin: 'http://localhost:5173' // Allow only this origin
}));

//This is the logic to add to the database
app.post('/add', upload.single('image'), generalcontroller.foradding);

//This is the logic to fetch the api from the database and send it as JSON.
app.get('/api/restaurants', generalcontroller.for_restaurantapi)

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"../client/dist/index.html"))
})

