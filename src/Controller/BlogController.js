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

//Get Blog by all users
module.exports.fetchBlogAllUser = (req, res) => {
    Blog.find({})
        .exec((error, blog) => {
            if (error) return res.status(500).json({ success: "false", error });
            if (blog) {
                res.status(200).json({ success: "true", data });
            }
        });
}

//Delete Blog
module.exports.deleteBlog = (req, res) => {
    
    Blog.findOneAndDelete({ _id: req.body.id })
        .exec((error, data) => {
            if (error) return res.status(500).json({success: "false", error });

            if (data) {
                return res.status(200).json({ massage: "your Post is successfully Delete", data ,success: "true"});
            }
        });
}

//Get Blog by all users
module.exports.fetchBlogLoginUser = (req, res) => {
    const {email}=req.body;
    Blog.find({email:email})
        .exec((error, blog) => {
            if (error) return res.status(500).json({ success: "false", error });
            if (blog) {
                res.status(200).json({ success: "true", blog });
            }
        });
}

//get Blog Details
module.exports.detailBlog = (req, res) => {

    if (req.body.id) {
        Blog.findOne({ _id: req.body.id })
            .exec((error, data) => {
                if (error) return res.status(500).json({ success: "false", error });

                if (data) {
                    res.status(201).json({ success: "true",data });
                }
            });
    }
}

//Comment Blog
module.exports.addCommentBlog = async (req, res) => {
    const { postId, comment, name } = req.body.commentData;
    Blog.findOneAndUpdate({ _id: postId }, { $push: { comments: req.body.commentData } },

        function (error, success) {
            if ({ error }) {
                res.status(500).json({ success: "false", error });
                console.log(error);
            } else {
                res.status(200).json({ msg: 'Your comment has been published', success: "true",data });
                console.log({ msg: 'Your comment has been published', success: "true" });
            }
        });
}

