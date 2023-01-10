const app=require('express');
const { deleteBlog, addBlog, fetchBlogAllUser, fetchBlogLoginUser } = require('../Controller/BlogController');
const router=app.Router();

router.post("/blog/add",addBlog);
router.get("/blog/get/all-user",fetchBlogAllUser);
router.post("/blog/get/login-user",fetchBlogLoginUser);
router.post("/blog/delete",deleteBlog);
router.post("/blog/details",detailBlog);


module.exports = router