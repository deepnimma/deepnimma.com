import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {barcelona as pic_names} from "../../../util/nameFactory";
import React from "react";
import MasonryFactory from "../../../util/masonryFactory";

const Barcelona: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"December 7th - December 9th"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/barcelona"}
            />
            <Footer />
        </div>
    )
}

export default Barcelona