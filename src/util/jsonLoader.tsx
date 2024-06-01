import fs from 'fs'

interface Posts {
    title: string,
    title_description: string,
    date: string,
    body: string[],
    picture_folder: string,
    pictures: string[],
    picture_locations: number[],
    references: string[]
} // Posts

function readJsonFiles(): Posts[] {
    const indexString: string = fs.readFileSync("./../data/blog/index.json", "utf-8");
    const indexData = JSON.parse(indexString);
    let data: Posts[] = Array(0);

    for (let i = 0; i < indexData.index.length; i++) {
        let dataString = fs.readFileSync(`./../data/blog/${indexData.index[i]}`, "utf-8");
        data.push(JSON.parse(dataString));
    } // for

    return data;
} // readJsonFiles

export const postData = readJsonFiles();
