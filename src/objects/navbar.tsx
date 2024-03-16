import {NavBarButton} from "./linkButton";

const linkTexts: string[] = [
    "Home",
    "Portfolio",
    "Investigates",
]

const ends: string[] = [
    "",
    "portfolio",
    "investigates",
] // deepnimma.com/<end goes here>

const tabs: NavBarButton[] = [
    new NavBarButton(ends[0], linkTexts[0], "Home"),
    new NavBarButton(ends[1], linkTexts[1], "Portfolio"),
    new NavBarButton(ends[2], linkTexts[2], "Investigates"),
] // creating the links

for (let i: number = 0; i < linkTexts.length; i++) {
    tabs.push(new NavBarButton())
}

export { tabs };