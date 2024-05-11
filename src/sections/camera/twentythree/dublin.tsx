import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {Box, ImageList, ImageListItem, Typography} from "@mui/material";
import {dublin as pic_names} from "../../elements/namefactory";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import MasonryFactory from "../MasonryFactory";

const Dublin: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"October 25th - October 28th"}
                picture_type={"jpg"}
                pic_names={pic_names}
                image_path={"2023/dublin"}
            />
            <Footer />
        </div>
    )
}

export default Dublin