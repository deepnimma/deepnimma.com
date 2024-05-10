import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'

import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Box, ImageList, ImageListItem, Typography} from "@mui/material";
import {spring24 as pic_names} from "../../elements/namefactory";

const Masonry: React.FC = () => {
    return (
        <Grid2 container rowSpacing={-4} columnSpacing={1} columns={1}>
            <Grid2>
                <Grid2 xs display="flex" justifyContent={"center"} alignItems={"center"}>
                    <Typography variant={"h4"} fontStyle="bold" fontFamily={"Bahnschrift, ui-monospace"}>January 1st - April 30th</Typography>
                </Grid2>
                <Grid2 display={"flex"} justifyContent={"center"}>
                    <Box sx={{overflowY: 'scroll'}}>
                        <ImageList variant={"masonry"} cols={3} gap={8}>
                            {pic_names.map((num) => (
                                <ImageListItem key={num}>
                                    <img
                                        src={require(`../../../data/portfolio/2024/bestofspring24/${num}.jpg`)}
                                        alt={num}
                                        loading={"lazy"}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Grid2>
            </Grid2>
        </Grid2>
    )
} // ImageList

const Spring24: React.FC = () => {
    return (
        <div>
            <Header />
            <Masonry />
            <Footer />
        </div>
    )
}

export default Spring24;
