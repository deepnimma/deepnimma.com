import {NavBarButton} from "./linkButton";

const linkTexts: string[] = [
    "Home",
    "Portfolio",
    "Investigates",
]

const ends: string[] = [
    "/",
    "portfolio",
    "investigates",
] // deepnimma.com/<end goes here>

const tabs: NavBarButton[] = []

for (let i: number = 0; i < linkTexts.length; i++) {
    tabs.push(new NavBarButton(ends[i], linkTexts[i], linkTexts[i]));
} // for

export { tabs };