import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {vatican as pic_names} from "../../elements/nameFactory";
import React from "react";
import MasonryFactory from "../MasonryFactory";

const Vatican: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"November 17th"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/vatican"}
            />
            <Footer />
        </div>
    )
}

export default Vatican