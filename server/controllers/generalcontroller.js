const Restaurant = require('../models/Restaurant')

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

const for_restaurantapi = async (req,res)=>{
    const { foodtype, search } = req.query;
    // console.log(req.query)
    
    let query = {};
    
    if (foodtype) {
        const foodTypesArray = foodtype.split(',');
        query.food_types = { $in: foodTypesArray };
    }

    if (search) {
        query.$or = [ // This allows searching by name or description
          { name: { $regex: search, $options: 'i' } }, // 'i' makes it case-insensitive
          { food_types: { $regex: search, $options: 'i' } }
        ];
    }
    
    const restaurants = await Restaurant.find(query);
    res.json(restaurants);

    // Restaurant.find()
    //     .then(response=>res.json(response))
    //     .catch(err=>console.log(err))

}

module.exports = {
    foradding,
    for_restaurantapi
}