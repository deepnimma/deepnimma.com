import {Route, Routes} from "react-router-dom";
import Spring24 from "../camera/twentyfour/bestofspring24";

export const TwentyFourRoutes: React.FC = () => {
    return (
        <Routes>
            <Route
                path={"/camera/spring24"}
                element={<Spring24 />}
                caseSensitive={false}
            />
        </Routes>
    )
}