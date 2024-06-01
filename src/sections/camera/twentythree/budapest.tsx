import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {budapest as pic_names} from "../../../util/nameFactory";
import React from "react";
import MasonryFactory from "../../../util/masonryFactory";

const Budapest: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"December 6th - December 7th"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/budapest"}
            />
            <Footer />
        </div>
    )
}

export default Budapest