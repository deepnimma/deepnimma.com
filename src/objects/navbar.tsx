import {NavBarButtons} from "./linkbuttons";

const linkTexts: string[] = [
    "Portfolio",
    "Investigates",
]

const ends: string[] = [
    "portfolio",
    "investigates",
] // deepnimma.com/<end goes here>

const tabs: NavBarButtons[] = [
    new NavBarButtons(ends[0], linkTexts[0], "Portfolio"),
    new NavBarButtons(ends[1], linkTexts[1], "Investigates"),
] // creating the links

export { tabs };