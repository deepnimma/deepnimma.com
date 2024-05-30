import {Header} from "../elements/header";
import WebsiteCopyright from "../pages/websiteCopyright";
import {Footer} from "../elements/footer";
import {Route, Routes} from "react-router-dom";

const Copyright: React.FC = () => {
    return (
        <div className={"copyrightCon"}>
            <Header />
            <WebsiteCopyright />
            <Footer />
        </div>
    )
}

const Changelog: React.FC = () => {
    return (
        <div className={"changelogCon"}>
            <Header />
            <Changelog />
            <Footer />
        </div>
    )
}

const Planned: React.FC = () => {
    return (
        <div className={"plannedCon"}>
            <Header />
            <Planned />
            <Footer />
        </div>
    )
}

export const FooterRoutes: React.FC = () => {
    return (
        <Routes>
            <Route
                path={"/changelog"}
                element={<Changelog />}
                caseSensitive={false}
                />
            <Route
                path={"/planned"}
                element={<Planned />}
                caseSensitive={false}
                />
            <Route
                path={"/copyright"}
                element={<Copyright />}
                caseSensitive={false}
                />
        </Routes>
    )
}