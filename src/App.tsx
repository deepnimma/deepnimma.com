import './css/home/App.css';
import { Header } from "./sections/home/header"
import { Body } from "./sections/home/body"
import Investigates from "./sections/pages/investigates";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

// const Header: React.FC = () => {
//   return <div className="header">
//     <span className="headerText">Place Holder Header Text</span>
//   </div>
// };

// const Body: React.FC = () => {
//   return <div className="body">
//     <span className="bodyText">Deepesh Nimma</span>
//   </div>
// }

const Home: React.FC = () => {
    return (
        <div>
            <Body />
        </div>
    )
}

// const App: React.FC = () => {
//   return (
//     <div className="appContainer">
//       <Header />
//       <Body />
//     </div>
//   )
// };

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
