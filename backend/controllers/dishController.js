// Example in dishController.js
const createDish = async (req, res) => {
    const { name, region, ingredients, preparationSteps, imageUrl } = req.body;
    
    if (!name || !region || !ingredients || !preparationSteps || !imageUrl) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Create a new dish
    const newDish = new Dish({ name, region, ingredients, preparationSteps, imageUrl });
    await newDish.save();
    res.status(201).json(newDish);
  };
  