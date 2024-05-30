import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {reykjavik as pic_names} from "../../elements/nameFactory";
import React from "react";
import MasonryFactory from "../MasonryFactory";

const Reykjavik: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"November 2nd - November 5th"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/reykjavik"}
            />
            <Footer />
        </div>
    )
}

export default Reykjavik