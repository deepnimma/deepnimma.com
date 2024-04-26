import './css/home/App.css';
import { MainPageHeader } from "./sections/home/mainpageheader"
import { Body } from "./sections/home/body"
import { MainPageFooter } from "./sections/home/mainpagefooter"
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
import {lazy} from "react";

const Home: React.FC = () => {
    return (
        <div>
            <Body />
            <MainPageFooter/>
        </div>
    )
}

const MainPage: React.FC = () => {
    return <div>
        <MainPageHeader />
        <Home />
    </div>
} // MainPage

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path={"/"}
                    element={<MainPage />}
                    />
                <Route
                    path={"/camera"}
                    element={
                        <div>
                            <MainPageHeader />
                            <Camera />
                            <MainPageFooter />
                        </div>
                    }
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
                            <MainPageHeader />
                            <Changelog />
                            <MainPageFooter />
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
                    element={
                        <div>
                            <MainPageHeader />
                            <WebsiteCopyright />
                            <MainPageFooter />
                        </div>
                    }
                    caseSensitive={false}
                />
            </Routes>
        </Router>
    ) // return
} // App

export default App;
