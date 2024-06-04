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
My first post on this website
</Typography>
<Typography variant="h5" color="text.secondary" fontFamily="inherit">
31st May, 2024
</Typography>
<Typography variant="body1" color="text.secondary" fontFamily="inherit">
By Deepesh Nimma
</Typography>
</Box>
<Box>
<img
src={require("../../data/blog/pictures/first_post/TEST_JPG.jpg")}
loading={"lazy"}
/>
</Box>
<Box sx={{width: "50%"}}>
<Typography variant="body1" fontFamily="inherit">
This is the first paragraph.
</Typography>
</Box>
<Box>
<img
src={require("../../data/blog/pictures/first_post/PNG_TEST.png")}
loading={"lazy"}
/>
</Box>
<Box sx={{width: "50%"}}>
<Typography variant="body1" fontFamily="inherit">
This is the second paragraph.
</Typography>
</Box>
<Box sx={{width: "50%"}}>
<Typography variant="body1" fontFamily="inherit">
This is the third paragraph
</Typography>
</Box>
<Box>
<img
src={require("../../data/blog/pictures/first_post/WEBP_TEST.webp")}
loading={"lazy"}
/>
</Box>
<Box sx={{width: "50%"}}>
<Typography variant="body1" fontFamily="inherit">
This is the fourth paragraph
</Typography>
</Box>
<Box sx={{width: "50%"}}>
<Typography variant="body1" fontFamily="inherit">
5
</Typography>
</Box>
<Box sx={{width: "50%"}}>
<Typography variant="body1" fontFamily="inherit">
6
</Typography>
</Box>
<Box>
<Typography variant="h5" fontFamily="inherit">References</Typography>
</Box>
</Stack>
)}