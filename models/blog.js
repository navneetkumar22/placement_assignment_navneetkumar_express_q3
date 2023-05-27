import mongoose, { Schema } from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title of the blog is required"]
    },
    content: {
        type: String,
        required: true
    }
})

export default mongoose.model("Blog", blogSchema);