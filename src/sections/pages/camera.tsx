import '../../css/pages/Camera.css'
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {Link as RouterLink} from 'react-router-dom'

const Camera: React.FC = () => {
    return (
        <Grid2 container spacing={0}>
            <Card sx={{maxWidth: 345}}>
                <CardActionArea component={RouterLink} to={"/camera/edinburgh"}>
                    <CardMedia
                        component={"img"}
                        height={140}
                        image={require("../../data/portfolio/display_images/edinburgh.jpg")}
                        alt={"edinburgh castle"}
                        />
                    <CardContent>
                        <Typography gutterBottom variant={"h5"} component={"div"}>
                            Edinburgh
                        </Typography>
                        <Typography variant={"body2"} color={"text.secondary"}>
                            I went to Edinburgh
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{maxWidth: 345}}>
                <CardActionArea>
                    <CardMedia
                        component={"img"}
                        height={140}
                        image={require("../../data/portfolio/display_images/dublin.jpg")}
                        alt={"dublin picture but it's actually edinburgh"}
                        />
                    <CardContent>
                        <Typography gutterBottom variant={"h5"} component={"div"}>
                            Dublin
                        </Typography>
                        <Typography variant={"body2"} color={"text.secondary"}>
                            Edinburgh pic though ^^^^
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid2>
    )
} // Camera

export default Camera