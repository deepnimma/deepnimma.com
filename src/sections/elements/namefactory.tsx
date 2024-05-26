function nameFactory(place: string, start: number, end: number): string[] {
    let names: string[] = []

    for (let i = start; i <= end; i++) {
        if (i < 10) {
            names.push(place + "-0" + String(i));
        } else {
            names.push(place + "-" + String(i));
        } // if-else
    } // for

    return names;
} // nameFactory

// 2023
const barcelona: string[] = nameFactory("barcelona", 1, 12);
const belgrade: string[] = nameFactory("belgrade", 1, 15);
const berlin: string[] = nameFactory("berlin", 1, 16);
const budapest: string[] = nameFactory("budapest", 1, 6);
const copenhagen: string[] = nameFactory("copenhagen", 1, 15);
const dublin: string[] = nameFactory("dublin", 1, 22);
const edinburgh: string[] = nameFactory("edinburgh", 26, 49);
const london: string[] = nameFactory("london", 1, 18);
const miscellaneous: string[] = nameFactory("misc", 1, 11);
const reykjavik: string[] = nameFactory("reykjavik", 1, 15);
const rome: string[] = nameFactory("rome", 1, 16);
const stockholm: string[] = nameFactory("stockholm", 1, 13);
const vatican: string[] = nameFactory("vatican", 1, 12);
const charlotte: string[] = nameFactory("charlotte", 1, 5);
const sanfrancisco: string[] = nameFactory("sanfrancisco", 1, 32); // change later
const washingtondc: string[] = nameFactory("dc", 1, 12); // change later
const oxford: string[] = nameFactory("oxford", 1, 48); // change later
const boston: string[] = nameFactory("boston", 1, 8); // change later

// 2024
const spring24: string[] = nameFactory("spring24", 1, 25);

export {
    // 2023
    charlotte,
    sanfrancisco,
    washingtondc,
    oxford,
    boston,
    barcelona,
    belgrade,
    berlin,
    budapest,
    copenhagen,
    dublin,
    edinburgh,
    london,
    miscellaneous,
    reykjavik,
    rome,
    stockholm,
    vatican,
    // 2024
    spring24,
}