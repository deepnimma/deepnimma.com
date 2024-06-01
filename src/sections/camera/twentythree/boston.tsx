import {Header} from "../../elements/header";
import {Footer} from "../../elements/footer";
import MasonryFactory from "../masonryFactory";
import {boston as pic_names} from "../../elements/nameFactory";
import React from "react";


const Boston: React.FC = () => {
    return (
        <div>
            <Header />
            <MasonryFactory
                date={"June 15th - June 18th"}
                picture_type={"webp"}
                pic_names={pic_names}
                image_path={"2023/boston"}
                />
            <Footer />
        </div>
    )
}

export default Boston