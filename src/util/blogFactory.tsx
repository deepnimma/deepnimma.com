import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

interface BlogCardProps {
    title: string;
    description: string;
    date: string;
}

const BlogCardFactory: React.FC<BlogCardProps> = ({ title , description, date}) => {
    return (
        <Card
            sx={{
                minWidth: "85vw",
                maxWidth: "85vw",
                position: "relative",
                color: "darkgrey",
                padding: 3
            }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant={"h4"} color="black" component={"div"} fontFamily={"Bahnschrift"}>
                        {title}
                    </Typography>
                    <Typography variant={"h5"} fontFamily={"Bahnschrift"}>
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