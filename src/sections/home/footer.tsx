import '../../css/home/Footer.css';
import { tabs } from "../../objects/footerNavBar"

const NavBar: React.FC = () => {
    return (
        <div className={"pages"}>
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
    ) // return
} // NavBar

const Footer: React.FC = () => {
    return (
        <div className={"footer"}>
            <div className={"footerNavBar"}>
                <NavBar />
            </div>
        </div>
    ) // return
} // Footer

export { Footer }