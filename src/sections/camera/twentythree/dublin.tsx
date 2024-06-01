import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {dublin as pic_names} from "../../elements/nameFactory";
import React from "react";
import MasonryFactory from "../masonryFactory";

const Dublin: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"October 25th - October 28th"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/dublin"}
            />
            <Footer />
        </div>
    )
}

export default Dublin