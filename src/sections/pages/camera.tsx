import '../../css/pages/Camera.css'
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {TwentyThreePics} from "./cameraSubsections/twentythreepics";
import {TwentyFourPics} from "./cameraSubsections/twentyfourpics";
import {TwentyThreeTitle, TwentyFourTitle} from "./cameraSubsections/titles";

const Camera: React.FC = () => {
    return (
        <div className={"gridcon"}>
            <Grid2 container rowSpacing={8} columnSpacing={3} columns={1} className={"cameraConCon"}>
                <Grid2>
                    <Grid2 xs display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <TwentyFourTitle />
                    </Grid2>
                    <Grid2 xs display={"flex"} justifyContent={"center"}>
                        <TwentyFourPics />
                    </Grid2>
                </Grid2>
                <Grid2>
                    <Grid2 xs display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <TwentyThreeTitle />
                    </Grid2>
                    <Grid2 xs display={"flex"} justifyContent={"center"}>
                        <TwentyThreePics />
                    </Grid2>
                </Grid2>
            </Grid2>
        </div>
    )
} // FullGrid

export default Camera