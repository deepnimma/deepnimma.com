import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {stockholm as pic_names} from "../../../util/nameFactory";
import React from "react";
import MasonryFactory from "../../../util/masonryFactory";

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