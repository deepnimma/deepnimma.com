import './css/home/App.css';
import { MainPageHeader } from "./sections/home/mainpageheader"
import { Header } from "./sections/elements/header"
import { Body } from "./sections/home/body"
import { MainPageFooter } from "./sections/home/mainpagefooter"
import { Footer } from "./sections/elements/footer"
import Investigates from "./sections/pages/investigates";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import Camera from "./sections/pages/camera";
import Changelog from "./sections/pages/changelog";
import Planned from "./sections/pages/planned";
import WebsiteCopyright from "./sections/pages/websiteCopyright";
import Edinburgh from "./sections/camera/twentythree/edinburgh"
import Dublin from "./sections/camera/twentythree/dublin"
import Reykjavik from "./sections/camera/twentythree/reykjavik"
import Copenhagen from "./sections/camera/twentythree/copenhagen"
import Stockholm from "./sections/camera/twentythree/stockholm"
import Rome from "./sections/camera/twentythree/rome"
import Vatican from "./sections/camera/twentythree/vatican"
import London from "./sections/camera/twentythree/london"
import Berlin from "./sections/camera/twentythree/berlin"
import Belgrade from "./sections/camera/twentythree/belgrade"
import Budapest from "./sections/camera/twentythree/budapest"
import Barcelona from "./sections/camera/twentythree/barcelona"
import Misc from "./sections/camera/twentythree/misc"
import Placeholder from "./sections/pages/placeholder";

// Spring 24
import Spring24 from "./sections/camera/twentyfour/bestofspring24"

const Home: React.FC = () => {
    return (
        <div>
            <MainPageHeader />
            <Body />
            <MainPageFooter/>
        </div>
    )
}

const Copyright: React.FC = () => {
    return (<div className={"copyrightCon"}>
        <Header/>
        <WebsiteCopyright/>
        <Footer/>
    </div>
    );
};

const MyCamera: React.FC = () => {
    return (<div>
        <MainPageHeader />
        <Camera />
        <Footer />
    </div>
    );
};

const MyPlaceholder: React.FC = () => {
    return (<div>
        <Header />
        <Placeholder />
        <Footer />
    </div>
    );
} // MyPlaceholder

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path={"/"}
                    element={<Home/>}
                />
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
                    path={"/investigates"}
                    element={
                        <div>
                            <MainPageHeader />
                            <Investigates />
                            <MainPageFooter />
                        </div>
                    }
                    caseSensitive={false}
                    />
                <Route
                    path={"/changelog"}
                    element={
                        <div>
                            <Header />
                            <Changelog />
                            <Footer />
                        </div>
                    }
                    caseSensitive={false}
                />
                <Route
                    path={"/planned"}
                    element={
                        <div>
                            <MainPageHeader />
                            <Planned />
                            <MainPageFooter />
                        </div>
                    }
                    caseSensitive={false}
                />
                <Route
                    path={"/copyright"}
                    element={<Copyright />}
                    caseSensitive={false}
                />
                <Route
                    path={"/camera/edinburgh"}
                    element={<Edinburgh />}
                    caseSensitive={false}
                />
                <Route
                    path={"/camera/dublin"}
                    element={<Dublin />}
                    caseSensitive={false}
                />
                <Route
                    path={"/camera/reykjavik"}
                    element={<Reykjavik />}
                    caseSensitive={false}
                />
                <Route
                    path={"/camera/copenhagen"}
                    element={<Copenhagen />}
                    caseSensitive={false}
                />
                <Route
                    path={"/camera/stockholm"}
                    element={<Stockholm />}
                    caseSensitive={false}
                />
                <Route
                    path={"/camera/rome"}
                    element={<Rome />}
                    caseSensitive={false}
                />
                <Route
                    path={"/camera/vatican"}
                    element={<Vatican />}
                    caseSensitive={false}
                />
                <Route
                    path={"/camera/london"}
                    element={<London />}
                    caseSensitive={false}
                />
                <Route
                    path={"/camera/berlin"}
                    element={<Berlin />}
                    caseSensitive={false}
                />
                <Route
                    path={"/camera/belgrade"}
                    element={<Belgrade />}
                    caseSensitive={false}
                />
                <Route
                    path={"/camera/budapest"}
                    element={<Budapest />}
                    caseSensitive={false}
                />
                <Route
                    path={"/camera/barcelona"}
                    element={<Barcelona />}
                    caseSensitive={false}
                />
                <Route
                    path={"/camera/misc23"}
                    element={<Misc />}
                    caseSensitive={false}
                />
                <Route
                    path={"/camera/2023/boston"}
                    element={<Boston />}
                    caseSensitive={false}
                    />
                <Route
                    path={"/camera/2023/charlotte"}
                    element={<Charlotte />}
                    caseSensitive={false}
                    />
                <Route
                    path={"/camera/2023/oxford"}
                    element={<Oxford />}
                    caseSensitive={false}
                    />
                <Route
                    path={"/camera/2023/sanfrancisco"}
                    element={<SanFrancisco />}
                    caseSensitive={false}
                    />
                <Route
                    path={"/camera/2023/DC"}
                    element={<DC />}
                    caseSensitive={false}
                    />
                {/*2024*/}
                <Route
                    path={"/camera/spring24"}
                    element={<Spring24 />}
                    caseSensitive={false}
                />
            </Routes>
        </Router>
    ) // return
} // App

export default App;
