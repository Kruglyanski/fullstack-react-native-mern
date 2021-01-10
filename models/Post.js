const {Schema, model} = require('mongoose')

const schema = new Schema({

    booked: {type: Boolean, required: true},
    date: {type: Date, default: Date.now},
    text: {type: String, required: true}
})

module.exports = model('Post', schema)


// id: {type: String, required: true, unique: true},
// img: 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg',