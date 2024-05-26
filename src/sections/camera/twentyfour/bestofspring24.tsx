import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'

import React from "react";
import {spring24 as pic_names} from "../../elements/namefactory";
import MasonryFactory from "../MasonryFactory";

const Spring24: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"January 1st - April 30th"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2024/bestofspring24"}
            />
            <Footer />
        </div>
    )
}

export default Spring24;
