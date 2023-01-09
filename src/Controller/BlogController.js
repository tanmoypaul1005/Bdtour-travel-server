const Blog = require("../Models/Blog");

//Add Blog
module.exports.addBlog = (req, res) => {
    
    const { title, body, image, author, description, userId, email } = req.body;

    Blog.findOne({ title: title })
        .exec((error, data) => {
            //  if(data){return next(new ErrorHander("Tour Package All Ready Register", 500));}
            const _blog = new Blog({
                title: title,
                author: author,
                body: body,
                image: image,
                description: description,
                slug: title,
                email: email,
                userId: userId,
            });
            _blog.save((error, data) => {
                if (error) { return res.status(505).json({ success: "false", error }); }
                if (data) { return res.status(201).json({ msg: 'Blog Create Successfully', data }) }
            });
        });
}


