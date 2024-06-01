import '../../css/pages/Investigates.css'
import React from "react";
import {postData} from "./../../util/jsonLoader";

const Investigates: React.FC = () => {
    return (
        <div className="investigatesCon">
            <span className="investigatesText">${postData[0].title}</span>
        </div>
    ) // return
} // Investigates

export default Investigates