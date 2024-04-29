import { Header } from '../elements/header'
import { Footer } from '../elements/footer'
import {Box, ImageList, ImageListItem} from "@mui/material";
import React from "react";

let pic_names: string[] = []

for (let i = 26; i <= 48; i++) pic_names.push(String(i))

const Masonry: React.FC = () => {
    return (
        <Box sx={{overflowY: 'scroll'}}>
            <ImageList variant={"masonry"} cols={3} gap={8}>
                {pic_names.map((num) => (
                    <ImageListItem key={num}>
                        <img
                            src={require(`../../data/portfolio/edinburgh/edinburgh-${num}.jpg`)}
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