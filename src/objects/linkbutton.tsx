class LinkButton {
    name!: string;
    link: string;
    displayText: string;

    constructor(link: string = "", displayText: string = "", name: string = "") {
        this.link = link;
        this.displayText = displayText;
        this.name = name;
    };
}; // LinkButton

export { LinkButton }