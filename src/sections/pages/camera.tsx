import '../../css/pages/Camera.css'
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {Link as RouterLink} from 'react-router-dom'

const Camera: React.FC = () => {
    return (
        <Grid2 container rowSpacing={0} columnSpacing={3} columns={1} className={"cameraConCon"}>
            <Grid2>
                <Grid2 xs display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <TwentyThreeTitle />
                </Grid2>
                <Grid2 xs display={"flex"} justifyContent={"center"}>
                    <TwentyThreePics />
                </Grid2>
            </Grid2>
        </Grid2>
    )
} // FullGrid

const TwentyThreeTitle: React.FC = () => {
    return (
        <Typography variant={"h1"} fontFamily={"Bahnschrift, ui-monospace"}>
            2023
        </Typography>
    )
}

const TwentyThreePics: React.FC = () => {
    return (
        <Grid2 container rowSpacing={1} columnSpacing={2} columns={12}>
            <Grid2 xs={4}>
                <Card sx={{maxWidth: 140, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../data/portfolio/display_images/miscellaneous.jpg")}
                            alt={"dublin picture"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Misc.
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Other random and uncategorized photos from the year!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2 xs={4}>
                <Card sx={{maxWidth: 140, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../data/portfolio/display_images/barcelona.jpg")}
                            alt={"dublin picture"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Barcelona
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Barca over Real Madrid anyday.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2 xs={4}>
                <Card sx={{maxWidth: 140, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../data/portfolio/display_images/budapest.jpg")}
                            alt={"dublin picture"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Budapest
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                My first time ever experiencing snow ;)
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2 xs={4}>
                <Card sx={{maxWidth: 140, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../data/portfolio/display_images/belgrade.jpg")}
                            alt={"dublin picture"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Belgrade
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Absolutely stunned by this city.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2 xs={4}>
                <Card sx={{maxWidth: 140, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../data/portfolio/display_images/berlin.jpg")}
                            alt={"dublin picture"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Berlin
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Mein Deutsch ist sehr gut!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2 xs={4}>
                <Card sx={{maxWidth: 140, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../data/portfolio/display_images/london.jpg")}
                            alt={"dublin picture"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                London
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                I miss a good public transit system.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2 xs={4}>
                <Card sx={{maxWidth: 140, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../data/portfolio/display_images/vatican.jpg")}
                            alt={"dublin picture"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Vatican
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Holy Moly Guacamole!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2 xs={4}>
                <Card sx={{maxWidth: 140, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../data/portfolio/display_images/rome.jpg")}
                            alt={"dublin picture"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Rome
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                You'd think everyone was over 20ft tall if you ever visited Rome.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2 xs={4}>
                <Card sx={{maxWidth: 140, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../data/portfolio/display_images/stockholm.jpg")}
                            alt={"dublin picture"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Stockholm
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                More like Stork's Home (I did not see a single stork here).
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2 xs={4}>
                <Card sx={{maxWidth: 140, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../data/portfolio/display_images/copenhagen.jpg")}
                            alt={"dublin picture"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Copenhagen
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Copenhagen more like Copen-haven amirite.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2 xs={4}>
                <Card sx={{maxWidth: 140, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../data/portfolio/display_images/reykjavik.jpg")}
                            alt={"dublin picture"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Reykjavik
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Icy Iceland (It wasn't really that cold tbh)
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2 xs={4}>
                <Card sx={{maxWidth: 140, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../data/portfolio/display_images/dublin.jpg")}
                            alt={"dublin picture but it's actually edinburgh"}
                        />
                        <CardContent>
                            <Typography gutterBottom variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Dublin
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Love me some Ireland!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2 xs={4}>
                <Card sx={{maxWidth: 140, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/edinburgh"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../data/portfolio/display_images/edinburgh.jpg")}
                            alt={"edinburgh castle"}
                            />
                        <CardContent>
                            <Typography gutterBottom variant={"h5"} component={"div"} fontFamily={"Bahnscrift, ui-monospace"}>
                                Edinburgh
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnscrift, ui-monospace"}>
                                I went to Edinburgh
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
        </Grid2>
    )
} // Camera

export default Camera