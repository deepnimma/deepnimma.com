import { Header } from '../elements/header'
import { Footer } from '../elements/footer'
import {Box, ImageList, ImageListItem} from "@mui/material";
import {edinburgh as pic_names} from "../elements/namefactory";
import React from "react";

const Masonry: React.FC = () => {
    return (
        <Box sx={{overflowY: 'scroll'}}>
            <ImageList variant={"masonry"} cols={3} gap={8}>
                {pic_names.map((num) => (
                    <ImageListItem key={num}>
                        <img
                            src={require(`../../data/portfolio/2023/edinburgh/${num}.jpg`)}
                            alt={num}
                            loading={"lazy"}
                            />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
} // ImageList

const Edinburgh: React.FC = () => {
    return (
        <div>
            <Header />
            <Masonry />
            <Footer />
        </div>
    )
}

export default Edinburgh