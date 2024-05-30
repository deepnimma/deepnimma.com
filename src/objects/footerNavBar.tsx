import {NavBarButton} from "./linkButton";

const linkTexts: string[] = [
    "Changelog",
    "Planned",
    "Copyright",
]

const ends: string[] = [
    "/placeholder", // <- change to /changelog when implemented
    "/placeholder", // <- change to /planned when implemented
    "/copyright",
]

const tabs: NavBarButton[] = []

for (let i : number = 0; i < linkTexts.length; i++) {
    tabs.push(new NavBarButton(ends[i], linkTexts[i], linkTexts[i]));
} // for

export { tabs };