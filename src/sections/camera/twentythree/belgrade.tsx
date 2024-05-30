import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {belgrade as pic_names} from "../../elements/nameFactory";
import React from "react";
import MasonryFactory from "../MasonryFactory";

const Belgrade: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"December 5th - December 6th"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/belgrade"}
            />
            <Footer />
        </div>
    )
}

export default Belgrade