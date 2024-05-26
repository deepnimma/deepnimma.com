import {Header} from "../../elements/header";
import {Footer} from "../../elements/footer";
import MasonryFactory from "../MasonryFactory";
import {washingtondc as pic_names} from "../../elements/namefactory";
import React from "react";


const DC: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"Placeholder"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/washingtondc"}
            />
            <Footer />
        </div>
    )
}

export default DC
