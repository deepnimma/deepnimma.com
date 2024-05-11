import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {Box, ImageList, ImageListItem, Typography} from "@mui/material";
import {edinburgh as pic_names} from "../../elements/namefactory";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import MasonryFactory from "../MasonryFactory";

const Edinburgh: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"October 12th - October 14th"}
                picture_type={"jpg"}
                pic_names={pic_names}
                image_path={"2023/edinburgh"}
            />
            <Footer />
        </div>
    )
}

export default Edinburgh