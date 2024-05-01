import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

export const TwentyFourPics: React.FC = () => {
    return (
        <Grid2 container rowSpacing={1} columnSpacing={2} justifyContent={"center"}>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/spring24"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/placeholder.png")}
                            alt={"picture of the washington monument in washington dc"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Best of S24
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Athens, GA, USA
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Best of my pictures from Spring semester of 2024.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
        </Grid2>
    ) // return
} // Camera
