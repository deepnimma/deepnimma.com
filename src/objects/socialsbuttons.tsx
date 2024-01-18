class SocialButton {
    link: string;
    iconLocation: string;
    name!: string;
    altText!: string;

    constructor(link: string = "", iconLocation: string = "", name: string = "", altText: string = "") {
        this.link = link;
        this.iconLocation = iconLocation;
        this.name = name;
        this.altText = altText;
    }; // constructor
} // SocialButton

const linkedInBtn = new SocialButton("https://linkedin.com/in/deepeshnimma", "linkedin.png", "LinkedIn", " Deepesh Nimma LinkedIn Profile Redirect");
const githubBtn = new SocialButton("https://github.com/deepnimma", "github.png", "Github", "Deepesh Nimma Github Profile Redirect");
const instaBtn = new SocialButton("https://instagram.com/deepnimma", "instagram.png", "Instagram", "Deepesh Nimma's Instagram Profile Redirect");

export { linkedInBtn, githubBtn, instaBtn };