import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {edinburgh as pic_names} from "../../elements/nameFactory";
import React from "react";
import MasonryFactory from "../masonryFactory";

const Edinburgh: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"October 12th - October 14th"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/edinburgh"}
            />
            <Footer />
        </div>
    )
}

export default Edinburgh