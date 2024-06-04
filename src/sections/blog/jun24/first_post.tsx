import {Box, Stack, Typography} from "@mui/material"
export const FirstPost: React.FC = () => {
return (
<Stack gap={4} sx={{
alignItems: "center",
padding: "20px",
fontFamily: "Bahnschrift",
}}>
<Box sx={{ flexGrow: 1 }}>
<Typography variant="h3" color="black" fontFamily="inherit">
It Begins: The First Blog Post
</Typography>
<Typography variant="h5" color="text.secondary" fontFamily="inherit">
4th June, 2024
</Typography>
<Typography variant="body1" color="text.secondary" fontFamily="inherit">
By Deepesh Nimma
</Typography>
</Box>
<Box sx={{width: "50%"}}>
<Typography variant="body1" fontFamily="inherit">
Hello everybody and welcome to the first post in my blog!!! Woohoo!!
</Typography>
</Box>
<Box sx={{width: "50%"}}>
<Typography variant="body1" fontFamily="inherit">
It took such a long time to make this thing function. Essentially, because I didn't really want to learn how to create a sort of 'generator' in javascript, I made a python script that autogenerates the blog pages just the way I like them. This is the equivalent to using hammer to screw in a screw because I did not want to learn how to use a screwdriver. Anyways, I hate javascript so I do not consider this a waste of my time and any hour spent NOT learning Javascript is an hour well spent in my opinion.
</Typography>
</Box>
<Box sx={{width: "50%"}}>
<Typography variant="body1" fontFamily="inherit">
Anyways, enjoy these cute cats.
</Typography>
</Box>
<Box>
<img
src={require("../../../data/blog/pictures/first_post/TEST_JPG.jpg")}
alt={"cat 1"}
loading={"lazy"}
/>
</Box>
<Box>
<img
src={require("../../../data/blog/pictures/first_post/PNG_TEST.png")}
alt={"cat 2"}
loading={"lazy"}
/>
</Box>
<Box>
<img
src={require("../../../data/blog/pictures/first_post/WEBP_TEST.webp")}
alt={"cat but in webp"}
loading={"lazy"}
/>
</Box>
<Box>
<Typography variant="h5" fontFamily="inherit">References</Typography>
</Box>
</Stack>
)}