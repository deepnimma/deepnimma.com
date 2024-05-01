import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {Box, ImageList, ImageListItem, Typography} from "@mui/material";
import {stockholm as pic_names} from "../../elements/namefactory";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";

const Masonry: React.FC = () => {
    return (
        <Grid2 container rowSpacing={0} columnSpacing={3} columns={1}>
            <Grid2 xs display="flex" justifyContent={"center"} alignItems={"center"}>
                <Typography variant={"h2"} fontStyle="bold" fontFamily={"Bahnschrift, ui-monospace"}>November 9th - November 11th</Typography>
            </Grid2>
            <Grid2>
                <Box sx={{overflowY: 'scroll'}}>
                    <ImageList variant={"masonry"} cols={3} gap={8}>
                        {pic_names.map((num) => (
                            <ImageListItem key={num}>
                                <img
                                    src={require(`../../../data/portfolio/2023/stockholm/${num}.jpg`)}
                                    alt={num}
                                    loading={"lazy"}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Grid2>
        </Grid2>
    )
}

const Stockholm: React.FC = () => {
    return (
        <div>
            <Header />
            <Masonry />
            <Footer />
        </div>
    )
}

export default Stockholm