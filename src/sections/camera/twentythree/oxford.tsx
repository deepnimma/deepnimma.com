import {Header} from "../../elements/header";
import {Footer} from "../../elements/footer";
import MasonryFactory from "../MasonryFactory";
import {oxford as pic_names} from "../../elements/namefactory";
import React from "react";


const Oxford: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"September 7th - December 3rd"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/oxford"}
            />
            <Footer />
        </div>
    )
}

export default Oxford
