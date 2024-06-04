import {Header} from "../elements/header";
import {Footer} from "../elements/footer";
import {FirstPost} from "../blog/first_post";
import {Route, Routes} from "react-router-dom";

const MyFirstPost: React.FC = () => {
    return (
        <div>
            <Header />
            <FirstPost />
            <Footer />
        </div>
    )
}

export const BlogRoutes: React.FC = () => {
    return (
        <Routes>
            <Route
                path={"/blog/first_post"}
                element={<MyFirstPost />}
                caseSensitive={false}
                />
        </Routes>
    )
}