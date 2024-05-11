import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {Box, ImageList, ImageListItem, Typography} from "@mui/material";
import {london as pic_names} from "../../elements/namefactory";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import MasonryFactory from "../MasonryFactory";

const London: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"Various Points During the Fall Semester."}
                picture_type={"jpg"}
                pic_names={pic_names}
                image_path={"2023/london"}
            />
            <Footer />
        </div>
    )
}

export default London