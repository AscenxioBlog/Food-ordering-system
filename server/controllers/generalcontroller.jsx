const Restaurant = require('./models/Restaurant')


const foradding = async (req,res)=>{
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
}

const for_restaurantapi =(req,res)=>{
    Restaurant.find()
        .then(response=>res.json(response))
        .catch(err=>console.log(err))

}

module.exports = {
    foradding,
    for_restaurantapi
}