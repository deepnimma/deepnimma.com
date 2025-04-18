import {MainPageHeader} from "../home/mainPageHeader";
import {Footer} from "../elements/footer";
import Camera from "../pages/camera";
import {Header} from "../elements/header";
import {Placeholder} from "../pages/placeholder";
import Blog from "../pages/blog";
import {MainPageFooter} from "../home/mainPageFooter";
import {Route, Routes} from "react-router-dom";

const MyCamera: React.FC = () => {
    return (
        <div>
            <MainPageHeader />
            <Camera />
            <Footer />
        </div>
    )
}

const MyPlaceholder: React.FC = () => {
    return (
        <div>
            <Header />
            <Placeholder />
            <Footer />
        </div>
    )
}

const MyBlog: React.FC = () => {
    return (
        <div>
            <MainPageHeader />
            <Blog />
            <MainPageFooter />
        </div>
    )
}

export const HeaderRoutes: React.FC = () => {
    return (
        <Routes>
            <Route
                path={"/camera"}
                element={<MyCamera />}
                caseSensitive={false}
                />
            <Route
                path={"/placeholder"}
                element={<MyPlaceholder />}
                caseSensitive={false}
                />
            <Route
                path={"/blog"}
                element={<MyBlog />}
                caseSensitive={false}
                />
        </Routes>
    )
}
