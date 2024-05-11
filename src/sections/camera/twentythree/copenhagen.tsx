import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {copenhagen as pic_names} from "../../elements/namefactory";
import React from "react";
import MasonryFactory from "../MasonryFactory";

const Copenhagen: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"November 8th - November 9th"}
                picture_type={"jpg"}
                pic_names={pic_names}
                image_path={"2023/copenhagen"}
            />
            <Footer />
        </div>
    )
}

export default Copenhagen