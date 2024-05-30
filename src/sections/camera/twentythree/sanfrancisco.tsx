import {Header} from "../../elements/header";
import {Footer} from "../../elements/footer";
import MasonryFactory from "../MasonryFactory";
import {sanfrancisco as pic_names} from "../../elements/nameFactory";
import React from "react";


const SanFrancisco: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"At Multiple Points in 2023"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/sanfrancisco"}
            />
            <Footer />
        </div>
    )
}

export default SanFrancisco
