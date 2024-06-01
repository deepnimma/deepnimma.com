import {Header} from "../../elements/header";
import {Footer} from "../../elements/footer";
import MasonryFactory from "../../../util/masonryFactory";
import {charlotte as pic_names} from "../../../util/nameFactory";
import React from "react";


const Charlotte: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"July 7th - July 9th"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/charlotte"}
            />
            <Footer />
        </div>
    )
}

export default Charlotte
