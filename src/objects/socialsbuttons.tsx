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

export { SocialButton }