function nameFactory(place: string, start: number, end: number): string[] {
    let names: string[] = []

    for (let i = start; i <= end; i++) {
        names.push(place + "-" + String(i));
    } // for

    return names;
} // nameFactory

export default {}