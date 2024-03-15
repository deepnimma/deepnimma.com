class LinkButtons {
    name!: string;
    link: string;
    displayText: string;

    constructor(link: string = "", displayText: string = "", name: string = "") {
        this.link = link;
        this.displayText = displayText;
        this.name = name;
    }; // constructor
} // Linkbuttons

class NavBarButtons extends LinkButtons {
    actualLink: string;

    constructor(link: string = "", displayText: string = "", name: string = "") {
        super(link, displayText, name);

        this.actualLink = "https://deepnimma.com/" + link;
    }; // constructor
} // NavBarButtons

export { LinkButtons, NavBarButtons };