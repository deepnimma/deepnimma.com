function nameFactory(place: string, start: number, end: number): string[] {
    let names: string[] = []

    for (let i = start; i <= end; i++) {
        names.push(place + "-" + String(i));
    } // for

    return names;
} // nameFactory

const barcelona: string[] = nameFactory("barcelona", 1, 12);
const belgrade: string[] = nameFactory("belgrade", 1, 15);
const berlin: string[] = nameFactory("berlin", 1, 16);
const budapest: string[] = nameFactory("budapest", 1, 6);
const copenhagen: string[] = nameFactory("copenhagen", 1, 15);
const dublin: string[] = nameFactory("dublin", 1, 23);
const edinburgh: string[] = nameFactory("edinburgh", 26, 48);
const london: string[] = nameFactory("london", 1, 19);
const miscellaneous: string[] = nameFactory("miscellaneous", 1, 16);
const reykjavik: string[] = nameFactory("reykjavik", 1, 15);
const rome: string[] = nameFactory("rome", 1, 16);
const stockholm: string[] = nameFactory("stockholm", 1, 14);
const vatican: string[] = nameFactory("vatican", 1, 12);

export {
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
}