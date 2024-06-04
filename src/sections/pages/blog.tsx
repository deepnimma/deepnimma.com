import '../../css/pages/Blog.css'
import React from "react";

import {default as first_post} from "./../../data/blog/first_post.json"
import BlogCardFactory from "../../util/blogFactory";
import {Stack} from "@mui/material";

const Blog: React.FC = () => {
    return (
        <Stack spacing={2} alignItems={"center"} padding={"20px"} sx={{ backgroundColor: "darkred" }}>
            <BlogCardFactory
                title={first_post.title}
                description={first_post.description}
                date={first_post.date}
                endpoint={first_post.endpoint}
            />
        </Stack>
    ) // return
} // Blog

export default Blog