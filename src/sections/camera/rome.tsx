import { Header } from '../elements/header'
import { Footer } from '../elements/footer'
import {Box, ImageList, ImageListItem} from "@mui/material";
import {rome as pic_names} from "../elements/namefactory";
import React from "react";

const Masonry: React.FC = () => {
    return (
        <Box sx={{overflowY: 'scroll'}}>
            <ImageList variant={"masonry"} cols={3} gap={8}>
                {pic_names.map((num) => (
                    <ImageListItem key={num}>
                        <img
                            src={require(`../../data/portfolio/2023/rome/${num}.jpg`)}
                            alt={num}
                            loading={"lazy"}
                            />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
} // ImageList

const Rome: React.FC = () => {
    return (
        <div>
            <Header />
            <Masonry />
            <Footer />
        </div>
    )
}

export default Rome