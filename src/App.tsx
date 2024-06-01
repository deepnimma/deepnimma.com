import './css/home/App.css';
import { MainPageHeader } from "./sections/home/mainPageHeader"
import { Body } from "./sections/home/body"
import { MainPageFooter } from "./sections/home/mainPageFooter"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

// Spring 24
import {TwentyThreePicturesRoutes} from "./sections/routes/twentyThreePicturesRoutes";
import {TwentyFourRoutes} from "./sections/routes/twentyFourPicturesRoutes";
import {FooterRoutes} from "./sections/routes/footerRoutes";
import { HeaderRoutes } from './sections/routes/headerRoutes';

const Home: React.FC = () => {
    return (
        <div>
            <MainPageHeader />
            <Body />
            <MainPageFooter/>
        </div>
    )
}

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path={"/"}
                    element={<Home/>}
                />
            </Routes>
            <HeaderRoutes />
            <FooterRoutes />
            <TwentyThreePicturesRoutes />
            <TwentyFourRoutes />
        </Router>
    ) // return
} // App

export default App;
