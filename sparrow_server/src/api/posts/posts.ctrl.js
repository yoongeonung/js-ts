const posts = require("./index");

const newPost = () => {
    return {
        id: Date.now(),

    }
};

posts.push(newPost);

exports.readPost = (ctx) => {
    const {id} = ctx.params;

    const post = posts.find((post) => {
        post.id.toString() === id;
    });

    if (!post) {
        ctx.status = 404;
        ctx.body = {
            message: "doesn't exist",
        }
        return;
    }

}