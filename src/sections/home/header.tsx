import '../../css/home/Header.css'
import { githubBtn, linkedInBtn, instaBtn } from '../../objects/socialsbuttons';
import { tabs } from "../../objects/navbar";

const NavBar: React.FC = () => {
    return <div className="pages">
        <a href={tabs[0].link} target="_blank" rel={"noreferrer"}>
            <button className={tabs[0].name}>{tabs[0].name}</button>
        </a>
        <a href={tabs[1].link} target={"_blank"} rel={"noreferrer"}>
            <button className={tabs[1].name}>{tabs[1].name}</button>
        </a>
    </div>
}; // NavBar

const SocialButtons: React.FC = () => {
    return <div className="socials">
        <a href={githubBtn.link} target="_blank" rel="noreferrer">
            <button className="githubBtn">
                <img className="actualGithubBtn" src={githubBtn.iconLocation} alt={githubBtn.altText} />
            </button>
        </a>
        <a href={linkedInBtn.link} target="_blank" rel="noreferrer">
            <button className="linkedinBtn">
                <img className="actualLinkedinBtn" src={linkedInBtn.iconLocation} alt={linkedInBtn.altText} />
            </button>
        </a>
        <a href={instaBtn.link} target="_blank" rel="noreferrer">
            <button className="instagramBtn">
                <img className="actualInstagramBtn" src={instaBtn.iconLocation} alt={instaBtn.altText} />
            </button>
        </a>
    </div>
}; // socialsButtons

const Header: React.FC = () => {
    return <div className="header">
        <SocialButtons />
        <div className={"navBar"}>
            <NavBar />
        </div>
    </div>
}; // Header

export { Header }
