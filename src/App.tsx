import './css/home/App.css';
import { Header } from "./sections/home/header"
import { Body } from "./sections/home/body"
import { Footer } from "./sections/home/footer"
import Investigates from "./sections/pages/investigates";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import Portfolio from "./sections/pages/portfolio";
import Changelog from "./sections/pages/changelog";
import Planned from "./sections/pages/planned";
import WebsiteCopyright from "./sections/pages/websiteCopyright";

const Home: React.FC = () => {
    return (
        <div>
            <Body />
        </div>
    )
}

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path={"/"}
                    element={
                        <div>
                            <Header />
                            <Home />
                            <Footer />
                        </div>
                    }
                    />
                <Route
                    path={"/portfolio"}
                    element={
                        <div>
                            <Header />
                            <Portfolio />
                            <Footer />
                        </div>
                    }
                    caseSensitive={false}
                    />
                <Route
                    path={"/investigates"}
                    element={
                        <div>
                            <Header />
                            <Investigates />
                            <Footer />
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
                            <Header />
                            <Planned />
                            <Footer />
                        </div>
                    }
                    caseSensitive={false}
                />
                <Route
                    path={"/copyright"}
                    element={
                        <div>
                            <Header />
                            <WebsiteCopyright />
                            <Footer />
                        </div>
                    }
                    caseSensitive={false}
                />
            </Routes>
        </Router>
    ) // return
} // App

export default App;
