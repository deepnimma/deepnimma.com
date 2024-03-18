import './css/home/App.css';
import { Header } from "./sections/home/header"
import { Body } from "./sections/home/body"
import Investigates from "./sections/pages/investigates";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import Portfolio from "./sections/pages/portfolio";

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
                            <Body />
                        </div>
                    }
                    />
                <Route
                    path={"/portfolio"}
                    element={
                        <div>
                            <Header />
                            <Portfolio />
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
                        </div>
                    }
                    caseSensitive={false}
                    />
            </Routes>
        </Router>
    ) // return
} // App

export default App;
