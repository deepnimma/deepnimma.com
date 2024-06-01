import Grid2 from "@mui/material/Unstable_Grid2";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom"

interface PictureCardProps {
    endpoint: string;
    display_image: string;
    image_alt: string;
    title: string;
    subtext: string;
    desc: string;
}

const PictureCardFactory: React.FC<PictureCardProps> = ({endpoint, display_image, image_alt, title, subtext, desc}) => {
    return (
        <Grid2 display={"flex"}>
            <Card sx={{
                minWidth: 175,
                maxWidth: 176,
                border: 2.5,
                borderRadius: 2,
                gap: 2
            }}>
                <CardActionArea component={RouterLink} to={endpoint}>
                    <CardMedia
                        component={"img"}
                        height={140}
                        image={require(`../data/portfolio/display_images/${display_image}`)}
                        alt={image_alt}
                        />
                    <CardContent>
                        <Typography variant={"h5"} component={"div"} fontFamily={"Bahnschrift, ui-monospace"}>
                            {title}
                        </Typography>
                        <Typography variant={"body1"} color={"black"} fontFamily={"Bahnschrift, ui-monospace"}>
                            {subtext}
                        </Typography>
                        <Typography variant={"body2"} color={"text.secondary"} fontFamily={"Bahnschrift, ui-monospace"}>
                            {desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid2>
    )
}

export default PictureCardFactory