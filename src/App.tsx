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
            <Header />
            <Routes>
                <Route
                    path={"/"}
                    element={<Home />}
                    caseSensitive={false}
                    />
                <Route
                    path={"/portfolio"}
                    element={<Portfolio />}
                    caseSensitive={false}
                    />
                <Route
                    path={"/investigates"}
                    element={<Investigates />}
                    caseSensitive={false}
                    />
            </Routes>
        </Router>
    )
}

export default App;
