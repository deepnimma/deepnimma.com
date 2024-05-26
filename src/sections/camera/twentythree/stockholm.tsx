import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {stockholm as pic_names} from "../../elements/namefactory";
import React from "react";
import MasonryFactory from "../MasonryFactory";

const Stockholm: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"November 9th - November 11th"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/stockholm"}
            />
            <Footer />
        </div>
    )
}

export default Stockholm