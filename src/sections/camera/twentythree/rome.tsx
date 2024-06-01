import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {rome as pic_names} from "../../../util/nameFactory";
import React from "react";
import MasonryFactory from "../../../util/masonryFactory";

const Rome: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"November 16th - November 17th"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/rome"}
            />
            <Footer />
        </div>
    )
}

export default Rome