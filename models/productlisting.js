const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productlisting=new Schema({
    image: {
        //solve the error by adding the following line
        type: String,
        default:
          "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        set: (v) =>
          v === ""
            ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            : v,
      },
      name: {
        type: String,
        required: true,
      },
      quantity_ml: {
        type: Number,
        required: true,
      },
      cost_in_rupees: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      reviews: [{
        review: String,
        // You can add more fields like reviewer name, date, etc.
    }]

});
const Productlisting = mongoose.model("Productlisting", productlisting);
module.exports = Productlisting;