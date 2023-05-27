import Blog from '../models/blog.js';

//home route
export const home = (_req, res) => {
    res.send("This is a home route for blog app");
}

//creating a blog
export const createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            throw new Error("Title and content of the blog are required")
        }

        //insert into database
        const blog = await Blog.create({ title, content });
        res.status(200).json({
            success: true,
            message: "Blog created successfully",
            blog
        })
    } catch (error) {
        console.log(error);
    }
}

//getting all blogs
export const getBlogs = async (_req, res) => {
    try {
        const blogs = await Blog.find();

        res.status(200).json({
            success: true,
            blogs
        })
    } catch (error) {
        console.log(error);
    }
}

//update a blog
export const updateBlog = async (req, res) => {
    try {
        const updateBlog = await Blog.findByIdAndUpdate(req.params.id, req.body);

        await updateBlog.save();

        res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            blog: updateBlog
        })
    } catch (error) {
        console.log(error);
    }
}

//delete a blog
export const deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Blog is deleted successfully"
        })
    } catch (error) {
        console.log(error);
    }
}