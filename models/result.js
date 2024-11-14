const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const result = new Schema({
    age: {
        type: String,
        enum: ['under-18', '18-24', '25-34', '35-44', '45-and-above'],
       
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'prefer-not-to-say'],
     
    },
    skinType: {
        type: [String],
        enum: ['oily', 'dry', 'combination', 'sensitive', 'normal'],
      
    },
    conditions: {
        type: [String],
        enum: ['acne', 'eczema', 'rosacea', 'dark-spots', 'fine-lines']
    },
    routineSteps: {
        type: String,
        enum: ['1-2', '3-4', '5-or-more'],
     
    },
    products: {
        type: [String],
        enum: ['cleanser', 'toner', 'moisturizer', 'sunscreen', 'exfoliator', 'serums']
    },
    outdoorTime: {
        type: String,
        enum: ['daily', 'a-few-times-a-week', 'rarely', 'never'],
     
    },
    waterIntake: {
        type: String,
        enum: ['less-than-2', '2-4', '5-7', 'more-than-7'],
        
    },
    goals: {
        type: [String],
        enum: ['hydration', 'anti-aging', 'brightening', 'acne-treatment', 'sun-protection']
    },
    preferredIngredients: {
        type: String
    },
    avoidedIngredients: {
        type: String
    },
    productType: {
        type: [String],
        enum: ['natural', 'dermatologist-tested', 'cruelty-free', 'fragrance-free']
    },
    shoppingPreference: {
        type: String,
        enum: ['online', 'in-store', 'both'],
        
    },
    emailRecommendations: {
        type: String,
        enum: ['yes', 'no'],
       
    },
    comments: {
        type: String
    }
});
const quiz = mongoose.model('Result', result);
module.exports = quiz;