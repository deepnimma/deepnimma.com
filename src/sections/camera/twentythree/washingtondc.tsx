import {Header} from "../../elements/header";
import {Footer} from "../../elements/footer";
import MasonryFactory from "../../../util/masonryFactory";
import {washingtondc as pic_names} from "../../../util/nameFactory";
import React from "react";


const DC: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"March 7th - March 10th"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/washingtondc"}
            />
            <Footer />
        </div>
    )
}

export default DC
