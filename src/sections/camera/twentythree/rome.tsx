import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {Box, ImageList, ImageListItem, Typography} from "@mui/material";
import {rome as pic_names} from "../../elements/namefactory";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import MasonryFactory from "../MasonryFactory";

const Rome: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"November 16th - November 17th"}
                picture_type={"jpg"}
                pic_names={pic_names}
                image_path={"2023/rome"}
            />
            <Footer />
        </div>
    )
}

export default Rome