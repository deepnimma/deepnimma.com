import '../../css/pages/Investigates.css'
import React from "react";

import {default as first_post} from "./../../data/blog/first_post.json"
import BlogCardFactory from "../../util/blogFactory";
import {Stack} from "@mui/material";

const Blog: React.FC = () => {
    return (
        <Stack spacing={2} alignItems={"center"} padding={"20px"} sx={{ backgroundColor: "darkred" }}>
            <BlogCardFactory
                title={"MY Name is Deepesh Nimma"}
                description={"And this is my blog"}
                date={"June 1st, 2024"}
                endpoint={"/placeholder"}
                />
            <BlogCardFactory
                title={first_post.title}
                description={first_post.description}
                date={first_post.date}
                endpoint={"/placeholder"}
            />
        </Stack>
    ) // return
} // Blog

export default Blog