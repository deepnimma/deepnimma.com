import {NavBarButton} from "./linkButton";

const linkTexts: string[] = [
    "Home",
    "Camera",
    "Blog",
]

const ends: string[] = [
    "/",
    "/camera",
    "/blog", // <- Change to /investigates when implemented
] // deepnimma.com/<end goes here>

const tabs: NavBarButton[] = []

for (let i: number = 0; i < linkTexts.length; i++) {
    tabs.push(new NavBarButton(ends[i], linkTexts[i], linkTexts[i]));
} // for

export { tabs };