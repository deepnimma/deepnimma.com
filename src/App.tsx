import './css/home/App.css';
import { Header } from "./sections/home/header"
import { Body } from "./sections/home/body"
import Investigates from "./sections/pages/investigates";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

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
                <Route path="/" element={<Home />} />
                <Route path="/investigates" element={<Investigates />} />
            </Routes>
        </Router>
    )
}

export default App;
