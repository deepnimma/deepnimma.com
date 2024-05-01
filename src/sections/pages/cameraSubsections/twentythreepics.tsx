import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

export const TwentyThreePics: React.FC = () => {
    return (
        <Grid2 container rowSpacing={1} columnSpacing={2} justifyContent={"center"}>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/misc23"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/miscellaneous.jpg")}
                            alt={"picture of the washington monument in washington dc"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Misc.
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Worldwide!
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Other random and uncategorized photos from the year!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/barcelona"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/barcelona.jpg")}
                            alt={"picture of the recinte modernista de sant pau in barcelona"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Barcelona
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Spain
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Barca over Real Madrid anyday.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/budapest"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/budapest.jpg")}
                            alt={"picture of the stairway in the magyar nemzeti museum"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Budapest
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Hungary
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                My first time ever experiencing snow ;)
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/belgrade"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/belgrade.jpg")}
                            alt={"picture of saint sava in front of the temple of saint sava"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Belgrade
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Serbia
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Absolutely stunned by this city.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/berlin"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/berlin.jpg")}
                            alt={"picture of a park in berlin at night time"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Berlin
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Germany
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Mein Deutsch ist sehr gut!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/london"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/london.jpg")}
                            alt={"picture of a close up of the clock on big ben"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                London
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                United Kingdom
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                I miss a good public transit system.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/oxford"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/placeholder.png")}
                            alt={"picture of the radcliffe camera"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Oxford
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                United Kingdom
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                I miss it :(
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/vatican"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/vatican.jpg")}
                            alt={"a picture from the inside of saint pietro's basilica in the vatican city"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Vatican
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Vatican City
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Holy Moly Guacamole!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/rome"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/rome.jpg")}
                            alt={"picture of the roman coliseum"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Rome
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Italy
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                You'd think everyone was over 20ft tall if you ever visited Rome.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/stockholm"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/stockholm.jpg")}
                            alt={"picture of a street in stockholm"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Stockholm
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Sweden
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                More like Stork's Home (I did not see a single stork here).
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/copenhagen"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/copenhagen.jpg")}
                            alt={"picture of a lit up deer in front of the rolex building in copenhagen. taking near christmas time"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Copenhagen
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Denmark
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Copenhagen more like Copen-haven amirite.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/reykjavik"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/reykjavik.jpg")}
                            alt={"picture of a water fall in iceland"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Reykjavik
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Iceland
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Icy Iceland (It wasn't really that cold tbh)
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/dublin"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/dublin.jpg")}
                            alt={"picture of an irish monument on the outskirts of dublin"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Dublin
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Ireland
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Love me some Ireland!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/edinburgh"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/edinburgh.jpg")}
                            alt={"edinburgh castle"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Edinburgh
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Scotland
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                I went to Edinburgh
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/charlotte"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/placeholder.png")}
                            alt={"edinburgh castle"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Charlotte
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                N.C., USA
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Shadow fan page.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/boston"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/placeholder.png")}
                            alt={"edinburgh castle"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Boston
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                MA, USA
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                Boston Creme reigns supreme.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/dc"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/placeholder.png")}
                            alt={"edinburgh castle"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                D.C.
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                UNITED STATES OF AMERICA!!
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                We need better monuments.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{maxWidth: 200, border: 2.5, borderRadius: 2, gap: 2}}>
                    <CardActionArea component={RouterLink} to={"/camera/sanfrancisco23"}>
                        <CardMedia
                            component={"img"}
                            height={140}
                            image={require("../../../data/portfolio/display_images/placeholder.png")}
                            alt={"edinburgh castle"}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                                San Francisco
                            </Typography>
                            <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                                CA, USA
                            </Typography>
                            <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                                The Golden Gate bridge is red not golden.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
        </Grid2>
    )
} // Camera
