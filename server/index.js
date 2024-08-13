const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config();
const cors = require('cors')
const Restaurant = require('./models/Restaurant')
const multer = require('multer');

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

app.post('/add', upload.single('image'), async (req, res) => {
    try {
        const { name, address, food_types, opening_time, closing_time, description, rating } = req.body;
        const image = req.file ? `/images/${req.file.filename}` : null;

        const newRestaurant = new Restaurant({
            name,
            address,
            food_types,
            opening_time,
            closing_time,
            description,
            rating,
            image
        });

        await newRestaurant.save();
        res.redirect('http://localhost:5173/admin/add');
    } catch (err) {
        console.error(err);
        // res.status(500).send('Server error');
    }
});


app.get('/api/restaurants',(req,res)=>{
    Restaurant.find()
        .then(response=>res.json(response))
        .catch(err=>console.log(err))

    // res.json([
    //     {
    //         id:1,
    //         name:"Pizza Hut",
    //         address:"123 Main St",
    //         image:"/images/pizza.png"
    //     },
    //     {
    //         id:2,
    //         name:"McDonald's",
    //         address:"456 Elm St",
    //         image:"/images/chicken.png"
    //     },
    //     {
    //         id:3,
    //         name:"Burger King",
    //         address:"2 Ajegunle st",
    //         image:"/images/burger.jpg"
    //     },
    //     {
    //         id:4,
    //         name:"Sweet Sensation",
    //         address:"32 Ogudu st",
    //         image:"/images/sweet.avif"
    //     },
    //     {
    //         id:5,
    //         name:"Cold Stone",
    //         address:"Opposite river, 2 Aba st",
    //         image:"/images/coldstone.png"
    //     },
    //     {
    //         id:6,
    //         name:"Finger Licking",
    //         address:"32 Ogudu st",
    //         image:"/images/rice.png"
    //     }

    // ])
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"../client/dist/index.html"))
})

