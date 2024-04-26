import '../../css/home/Header.css'
import { githubBtn, linkedInBtn, instaBtn } from '../../objects/socialsbuttons';
import { tabs } from "../../objects/headerNavBar";

const NavBar: React.FC = () => {
    return <div className="pages">
        <a href={tabs[0].link} rel={"noopener noreferrer"}>
            <button className={tabs[0].name}>{tabs[0].name}</button>
        </a>
        <a href={tabs[1].link} rel={"noopener noreferrer"}>
            <button className={tabs[1].name}>{tabs[1].name}</button>
        </a>
        <a href={tabs[2].link} rel={"noopener noreferrer"}>
            <button className={tabs[2].name}>{tabs[2].name}</button>
        </a>
    </div>
}; // NavBar

const Header: React.FC = () => {
    return <div className="header">
        <div className={"navBar"}>
            <NavBar />
        </div>
    </div>
}; // Header

export { Header }
