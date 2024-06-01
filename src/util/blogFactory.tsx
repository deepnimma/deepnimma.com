import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

interface BlogCardProps {
    title: string;
    description: string;
    date: string;
    endpoint: string;
}

const BlogCardFactory: React.FC<BlogCardProps> = ({ title , description, date, endpoint}) => {
    return (
        <Card
            sx={{
                minWidth: "85vw",
                maxWidth: "85vw",
                position: "relative",
                color: "darkgrey",
                padding: 3,
                border: 4,
                borderColor: "black",
                borderRadius: 2.5,
                backgroundColor: "lightgrey"
            }}>
            <CardActionArea component={RouterLink} to={endpoint}>
                <CardContent>
                    <Typography gutterBottom variant={"h4"} color="black" component={"div"} fontFamily={"Bahnschrift"}>
                        {title}
                    </Typography>
                    <Typography variant={"h5"} color={"text.secondary"} fontFamily={"Bahnschrift"}>
                        {description}
                    </Typography>
                    <Typography variant={"body1"} color={"text.secondary"} fontFamily={"Sudo"}>
                        {date}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BlogCardFactory