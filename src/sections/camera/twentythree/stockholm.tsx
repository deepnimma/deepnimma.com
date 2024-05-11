import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {Box, ImageList, ImageListItem, Typography} from "@mui/material";
import {stockholm as pic_names} from "../../elements/namefactory";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import MasonryFactory from "../MasonryFactory";

const Stockholm: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"November 9th - November 11th"}
                picture_type={"jpg"}
                pic_names={pic_names}
                image_path={"2023/stockholm"}
            />
            <Footer />
        </div>
    )
}

export default Stockholm