class LinkButton {
    name!: string;
    link: string;
    displayText: string;

    constructor(link: string = "", displayText: string = "", name: string = "") {
        this.link = link;
        this.displayText = displayText;
        this.name = name;
    }; // constructor
} // Linkbuttons

class NavBarButton extends LinkButton {
    constructor(link: string = "", displayText: string = "", name: string = "") {
        super(link, displayText, name);
    }; // constructor
} // NavBarButtons

export { LinkButton, NavBarButton };