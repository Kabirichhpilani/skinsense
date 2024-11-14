const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const Register = require('./models/registers');
const engine = require('ejs-mate');
const Quiz = require('./models/result');
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/static', express.static(path.join(__dirname, 'public')));
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
app.engine('ejs', engine);
app.set('view engine', 'ejs');
const mongoose = require('mongoose');
const Productlisting = require('./models/productlisting');
const Cart = require('./models/cart');





main().then(() => console.log('MongoDB Connected...')).catch(err => console.error('MongoDB connection error:', err));
async function main() {
    try {
        await mongoose.connect('mongodb://localhost:27017/ssregister', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (err) {
        console.error('Initial MongoDB connection error:', err);
    }
}


app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.render('register.ejs');
});
app.get('/login',(req,res)=>{
    res.render('loginn.ejs');
});
app.post('/register', async (req, res) => {
    try{

        const registerEmployee = new Register({
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password
        })
        const registered = await registerEmployee.save();
        return res.render('loginn.ejs');
        
    }catch(err){
        res.send(err);
    }
    
});
app.get('/home',(req,res)=>{
    res.render('home.ejs');
});
app.get('/shop/search', (req, res) => {
    res.render('search.ejs');
});//
app.post('/login', async (req, res) => {
    try {
        const user = await Register.findOne({ email: req.body.email, password: req.body.password });
        if (user) {
            res.render('home.ejs');
        } else {
            res.status(401).send('<script>alert("Invalid login details"); window.location.href = "/login";</script>');
            
        }
    } catch (err) {
        res.send('error');
    }
});

app.get('/shop',async(req,res)=>{

    let allListings = await Productlisting.find({});
    res.render('shop.ejs', { allListings });
});
app.get('/shop/:id', async (req, res) => {
    
    const { id } = req.params;
    const qlisting = await Productlisting.findById(id);
    res.render('description.ejs', { qlisting });
});

app.post('/shop/:id', async (req, res) => {
    const { id } = req.params;
    const qlisting = await Productlisting.findById(id);
    const cart = new Cart({
        image: qlisting.image,
        name: qlisting.name,
        quantity_ml: qlisting.quantity_ml,
        cost_in_rupees: qlisting.cost_in_rupees,
        description: qlisting.description
    });
    await cart.save();
    res.redirect('/cart');

}
);  
app.post('/shop/:id/review', async (req, res) => {
    const { id } = req.params;
    const reviewText = req.body.review;
    if (!reviewText || reviewText.trim() === "") {
        return res.status(400).send("Review cannot be empty.");
    }

    const review = {
        review: reviewText.trim() 
    };

    try {
       
        await Productlisting.updateOne(
            { _id: id },
            { $push: { reviews: review } }
        );


        res.redirect(`/shop/${id}`);
    } catch (error) {
        console.error("Error updating product listing:", error);
        res.status(500).send("An error occurred while submitting your review. Please try again.");
    }
});
app.post('/quiz', async (req, res) => {
    try {
        const quizData = {
            age: req.body.age,
            gender: req.body.gender,
            skinType: req.body.skinType,
            conditions: req.body.conditions,
            routineSteps: req.body.routineSteps,
            products: req.body.products,
            outdoorTime: req.body.outdoorTime,
            waterIntake: req.body.waterIntake,
            goals: req.body.goals,
            preferredIngredients: req.body.preferredIngredients,
            avoidedIngredients: req.body.avoidedIngredients,
            productType: req.body.productType,
            shoppingPreference: req.body.shoppingPreference,
            emailRecommendations: req.body.emailRecommendations,
            comments: req.body.comments
        };

        const newQuiz = new Quiz(quizData);
        await newQuiz.save();
        res.redirect('/result');
    } catch (err) {
        console.error('Error saving quiz data:', err);
        res.status(500).send('An error occurred while submitting your quiz. Please try again.');
    }
});
app.get('/result', async (req, res) => {
    let quizResults = await Quiz.find({});
    res.render('result.ejs', { quizResults });
});

app.get('/cart', async (req, res) => {
    let cartItems = await Cart.find({});
    res.render('cart.ejs', { cartItems });
    
});
app.get('/quiz',(req,res)=>{
    res.render('quiz.ejs');
});
app.delete('/cart/:id', async (req, res) => {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.redirect('/cart');
});
app.get('/ayurveda',(req,res)=>{
    res.render('ayurveda.ejs');
})
app.post("/home/navbar",async(req,res)=>{
    
    const{ id}=req.params;
    

    
});
app.get("/imginput",(req,res)=>{
    res.render('imginput.ejs');
});
app.get('/search/:name', async (req, res) => {
    const name = req.params.name;
    try {
        const products = await Productlisting.find({ name: new RegExp(name, 'i') });
        res.render('shop/search', { products: products });
    } catch (err) {
        console.error('Error during product search:', err);
        res.render('shop/search', { products: null });
    }
});


