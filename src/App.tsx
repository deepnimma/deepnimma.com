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
import Edinburgh from "./sections/camera/twentythree/edinburgh";

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
        <Header />
        <Camera />
        <Footer />
    </div>
    );
};

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
            </Routes>
        </Router>
    ) // return
} // App

export default App;
