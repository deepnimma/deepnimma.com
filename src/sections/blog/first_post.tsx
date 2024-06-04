import {Box, Stack, Typography} from "@mui/material";

export const FirstPost: React.FC = () => {
    return (
        <Stack gap={4} sx={{
            alignItems: "center",
            padding: "20px",
            fontFamily: "Bahnschrift",
        }}>
            <Box sx={{flexGrow: 1}}>
                <Typography variant={"h3"} color={"black"} fontFamily={"inherit"}>
                    Blog Post Extreme
                </Typography>
                <Typography variant={"h5"} color={"text.secondary"} fontFamily={"inherit"}>
                    June 4th, 2024
                </Typography>
                <Typography variant={"body1"} color={"text.secondary"} fontFamily={"inherit"}>
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
                <Typography variant={"body1"} fontFamily={"inherit"}>
                    Ahhhhhhhhhhhhhhhhhhhhh this isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar
                    sapien et. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Diam volutpat
                    commodo sed egestas egestas. Cursus vitae congue mauris rhoncus aenean vel. Diam sit amet nisl
                    suscipit adipiscing bibendum est. Sapien et ligula ullamcorper malesuada proin libero nunc
                    consequat. Neque laoreet suspendisse interdum consectetur libero id. Id interdum velit laoreet id
                    donec ultrices tincidunt arcu. Mollis nunc sed id semper risus. Auctor neque vitae tempus quam
                    pellentesque nec. Id porta nibh venenatis cras sed felis eget velit. a paragraph that I am writing
                    now
                </Typography>
            </Box><Box sx={{width: "50%"}}>
                <Typography variant={"body1"} fontFamily={"inherit"}>
                    Ahhhhhhhhhhhhhhhhhhhhh this isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar
                    sapien et. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Diam volutpat
                    commodo sed egestas egestas. Cursus vitae congue mauris rhoncus aenean vel. Diam sit amet nisl
                    suscipit adipiscing bibendum est. Sapien et ligula ullamcorper malesuada proin libero nunc
                    consequat. Neque laoreet suspendisse interdum consectetur libero id. Id interdum velit laoreet id
                    donec ultrices tincidunt arcu. Mollis nunc sed id semper risus. Auctor neque vitae tempus quam
                    pellentesque nec. Id porta nibh venenatis cras sed felis eget velit. a paragraph that I am writing
                    now
                </Typography>
            </Box>
            <Box>
                <img
                    src={require("../../data/blog/pictures/first_post/PNG_TEST.png")}
                    loading={"lazy"}
                />
            </Box>
            <Box>
                <img
                    src={require("../../data/blog/pictures/first_post/WEBP_TEST.webp")}
                    loading={"lazy"}
                />
            </Box>
            <Box sx={{width: "50%"}}>
                <Typography variant={"body1"} fontFamily={"inherit"}>
                    Ahhhhhhhhhhhhhhhhhhhhh this isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar
                    sapien et. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Diam volutpat
                    commodo sed egestas egestas. Cursus vitae congue mauris rhoncus aenean vel. Diam sit amet nisl
                    suscipit adipiscing bibendum est. Sapien et ligula ullamcorper malesuada proin libero nunc
                    consequat. Neque laoreet suspendisse interdum consectetur libero id. Id interdum velit laoreet id
                    donec ultrices tincidunt arcu. Mollis nunc sed id semper risus. Auctor neque vitae tempus quam
                    pellentesque nec. Id porta nibh venenatis cras sed felis eget velit. a paragraph that I am writing
                    now
                </Typography>
            </Box>
        </Stack>
    )
}