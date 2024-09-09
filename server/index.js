const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config();
const cors = require('cors')
const Menu = require('./models/Menu')
const Restaurant = require("./models/Restaurant")
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
app.use(express.static(path.join(__dirname,"../public")))

app.use(cors({
    origin: 'http://localhost:5173' // Allow only this origin
}));

//This is the logic to add to the database
app.post('/add', upload.single('image'), generalcontroller.foradding);

//This is the logic to fetch the api from the database and send it as JSON.
app.get('/api/restaurants', generalcontroller.for_restaurantapi)

//This is the logic to fetch the a limited number of restaurant from the database and send it as JSON.
app.get('/api/fewrestaurants', async (req, res) => {
    try {
      // Limit the number of restaurants to 10
      const restaurants = await Restaurant.find().sort({ createdAt: -1 }).limit(6);
      res.json(restaurants);
    } catch (error) {
      res.status(500).send(error);
    }
});

app.post('/add-menu', upload.single('image'),async (req,res)=>{
    try{
        const {name,price,food_description,restaurant } = req.body;
        const image = req.file ? `/images/${req.file.filename}` : null;

        const newMenu = new Menu({
            name,
            price,
            food_description,
            restaurant ,
            image
        })

        await newMenu.save();
        res.redirect('http://localhost:5173/admin/add')
    }catch(err){
        console.error(err);
    }

})

app.get('/api/food-types', async (req, res) => {
    try {
        const foodTypes = await Restaurant.distinct('food_types');// This is mongoDB distinct which allows you to get the unique values for a specific field across all documents in your collection.
        res.json(foodTypes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/menu/:restaurantid',async (req,res)=>{
    try{
        const {restaurantid} = req.params;
        const menus = await Menu.find({restaurant: restaurantid})
            .populate('restaurant','address')
            .populate('restaurant','description')
        res.json(menus)
        // console.log(req.params)
        console.log('Menus found:', menus);
    }
    catch(err){
        console.log(err)
    }
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"../client/dist/index.html"))
})
