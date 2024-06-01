import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {berlin as pic_names} from "../../elements/nameFactory";
import React from "react";
import MasonryFactory from "../masonryFactory";

const Berlin: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"December 3th - December 5th"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/berlin"}
            />
            <Footer />
        </div>
    )
}

export default Berlin