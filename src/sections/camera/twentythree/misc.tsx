import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {miscellaneous as pic_names} from "../../../util/nameFactory";
import React from "react";
import MasonryFactory from "../../../util/masonryFactory";

const Misc: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"2023"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/miscellaneous"}
            />
            <Footer />
        </div>
    )
}

export default Misc