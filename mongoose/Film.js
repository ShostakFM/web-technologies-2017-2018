const mongoose = require('./mongoose');


const Film = mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 4,
        max: 15
    },
    id: {
        type: Number,
        required: true
    },
    popularity: {
        type: Number
    }
});


module.exports = mongoose.model('Film', userSchema);