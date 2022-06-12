const Router = require('koa-router');
const posts = new Router();
require('dotenv').config();
const mongoose = require('mongoose');

const {PORT, MONGO_URI} = process.env.PORT;
mongoose.connect(MONGO_URI, {useNewUrlParser: true})
    .then(() => {
        console.log("DB connected");
    }).catch((e) => {
    console.log(e);
});


posts.get('/');
posts.post('/');
posts.get('/:id');
posts.delete('/:id')
posts.put('/:id');
posts.patch('/:id');

module.exports = posts;