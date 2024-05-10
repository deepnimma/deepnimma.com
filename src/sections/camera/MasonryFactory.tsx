import Grid2 from "@mui/material/Unstable_Grid2";
import {Box, ImageList, ImageListItem, Typography} from "@mui/material";
import {barcelona as pic_names} from "../elements/namefactory";
import React from "react";

interface Props {
    image_path: string;
    pic_names: string[];
    date: string;
    picture_type: string;
} // Props

const MasonryFactory: React.FC<Props> = ({  image_path, pic_names, date, picture_type }) => {
    return (
        <Grid2 container rowSpacing={-4} columnSpacing={1} columns={1}>
            <Grid2>
                <Grid2 xs display="flex" justifyContent={"center"} alignItems={"center"}>
                    <Typography variant={"h4"} fontStyle="bold" fontFamily={"Bahnschrift, ui-monospace"}>{ date }</Typography>
                </Grid2>
                <Grid2 display={"flex"} justifyContent={"center"}>
                    <Box sx={{overflowY: 'scroll'}}>
                        <ImageList variant={"masonry"} cols={3} gap={8}>
                            {pic_names.map((num) => (
                                <ImageListItem key={num}>
                                    <img
                                        src={require(`${image_path}/${num}.${picture_type}`)}
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
}

export default MasonryFactory