import {NavBarButton} from "./linkButton";

const linkTexts: string[] = [
    "Changelog",
    "Planned",
    "Copyright",
]

const ends: string[] = [
    "changelog",
    "portfolio",
    "copyright",
]

const tabs: NavBarButton[] = []

for (let i : number = 0; i < linkTexts.length; i++) {
    tabs.push(new NavBarButton(ends[i], linkTexts[i], linkTexts[i]));
} // for

export { tabs };