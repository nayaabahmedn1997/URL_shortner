const mongoose = require('mongoose');



const urlSchema = mongoose.Schema({
    shortID : {
        type: String,
        required: true,
        unique:true
    },
    redirectURL:{
        type: String,
    },
    visitHistory:[
        {
        id:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"user"
            },
            visitedAt:{
                type:Date,
                default: Date.now
            }
        }
]
});

const urlModel = mongoose.model('url', urlSchema);

module.exports = urlModel;