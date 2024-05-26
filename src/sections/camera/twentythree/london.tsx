import { Header } from '../../elements/header'
import { Footer } from '../../elements/footer'
import {london as pic_names} from "../../elements/namefactory";
import React from "react";
import MasonryFactory from "../MasonryFactory";

const London: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"Various Points During the Fall Semester."}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/london"}
            />
            <Footer />
        </div>
    )
}

export default London