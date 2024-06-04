import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import PictureCardFactory from "../../../util/pictureCardFactory";

export const TwentyThreePictureCards: React.FC = () => {
    return (
        <Grid2 container columns={12} spacing={1} justifyContent={"center"}>
            <PictureCardFactory
                endpoint={"/camera/2023/misc23"}
                display_image={"miscellaneous.webp"}
                image_alt={"picture of the washington monument in washington dc"}
                title={"Misc."}
                subtext={"Worldwide!"}
                desc={"Other random and uncategorized photos from the year!"}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/barcelona"}
                display_image={"barcelona.jpg"}
                image_alt={"picture of the recinte modernista de sant pau in barcelona"}
                title={"Barcelona"}
                subtext={"Spain"}
                desc={"Barca over Real Madrid anyday."}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/budapest"}
                display_image={"budapest.jpg"}
                image_alt={"picture of the stairway in the magyar nemzeti museum"}
                title={"Budapest"}
                subtext={"Hungary"}
                desc={"My first time ever experiencing snow."}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/belgrade"}
                display_image={"belgrade.jpg"}
                image_alt={"picture of saint sava in fron of the temple of saint sava"}
                title={"Belgrade"}
                subtext={"Serbia"}
                desc={"Absolutely stunned by this city"}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/berlin"}
                display_image={"berlin.jpg"}
                image_alt={"picture of a park in berlin at night time"}
                title={"Berlin"}
                subtext={"Germany"}
                desc={"Mein Deutsch ist sehr gut!"}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/london"}
                display_image={"london.jpg"}
                image_alt={"picture of a close up of the clock on big ben"}
                title={"London"}
                subtext={"United Kingdom"}
                desc={"I miss a good public transit system."}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/oxford"}
                display_image={"oxford.webp"}
                image_alt={"picture of the radcliffe camera"}
                title={"Oxford"}
                subtext={"United Kingdom"}
                desc={"I miss it :("}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/vatican"}
                display_image={"vatican.jpg"}
                image_alt={"a picture from the inside of saint pietro's basilica in the vatican city"}
                title={"Vatican"}
                subtext={"Vatican City"}
                desc={"Holy Moly Guacamole!"}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/rome"}
                display_image={"rome.jpg"}
                image_alt={"picture of the roman colisseum"}
                title={"Rome"}
                subtext={"Italy"}
                desc={"You'd think everyone was over 20ft tall if you ever visited Rome."}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/stockholm"}
                display_image={"stockholm.jpg"}
                image_alt={"picture of a street in stockholm"}
                title={"Stockholm"}
                subtext={"Sweden"}
                desc={"More like Stork's horm (I did not see a single stork here)."}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/copenhagen"}
                display_image={"copenhagen.jpg"}
                image_alt={"picture of a lit up deer in front of the rolex building in copenhagen. Taken near christmas time"}
                title={"Copenhagen"}
                subtext={"Denmark"}
                desc={"Copenhagen more like Copen-haven amirite."}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/reykjavik"}
                display_image={"reykjavik.jpg"}
                image_alt={"picture of a water fall in iceland"}
                title={"Reykjavik"}
                subtext={"Iceland"}
                desc={"Icy Iceland (It wasn't really that cold tbh)"}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/dublin"}
                display_image={"dublin.jpg"}
                image_alt={"picture of an irish monument on the outskirts of dublin"}
                title={"Dublin"}
                subtext={"Ireland"}
                desc={"Love me some Ireland!"}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/edinburgh"}
                display_image={"edinburgh.jpg"}
                image_alt={"edinburgh castle"}
                title={"Edinburgh"}
                subtext={"Scotland"}
                desc={"I went to Edinburgh"}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/charlotte"}
                display_image={"charlotte.webp"}
                image_alt={"picture of charlotte downtown"}
                title={"Charlotte"}
                subtext={"N.C., USA"}
                desc={"Shadow fan page."}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/boston"}
                display_image={"boston.webp"}
                image_alt={"picture of a few buildings in boston"}
                title={"Boston"}
                subtext={"MA, USA"}
                desc={"Boston Creme reigns supreme"}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/DC"}
                display_image={"dc.webp"}
                image_alt={"picture of the washington monument in dc"}
                title={"D.C."}
                subtext={"UNITED STATES OF AMERICA!"}
                desc={"We need better monuments."}
                />
            <PictureCardFactory
                endpoint={"/camera/2023/sanfrancisco"}
                display_image={"sanfran.webp"}
                image_alt={"golden gate bridge"}
                title={"San Francisco"}
                subtext={"CA, USA"}
                desc={"The Golden Gate bridge is red not golden."}
                />
        </Grid2>
    )
} // Camera
