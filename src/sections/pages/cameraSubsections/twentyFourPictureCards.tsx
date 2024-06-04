import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import PictureCardFactory from "../../../util/pictureCardFactory";

export const TwentyFourPictureCards: React.FC = () => {
    return (
        <Grid2 container spacing={1} justifyContent={"center"}>
            <PictureCardFactory
                endpoint={"/camera/2024/spring24"}
                display_image={"spring24.jpg"}
                image_alt={"Picture of yours truly in front of a sea of stars"}
                title={"Best of S24"}
                subtext={"Athens, GA, USA"}
                desc={"Best of my pictures from Spring semester of 2024."}
                />
        </Grid2>
    ) // return
} // Camera
