import json
import os
import typing


def _create_title(data: list[dict]) -> str:
    title: str = data.pop(0)["title"]
    date: str = data.pop(0)["date"]

    print(f"Creating Title String: Title -> {title}, Date -> {date}")

    return (r'<Box sx={{ flexGrow: 1 }}>' + "\n" +
            r'<Typography variant="h3" color="black" fontFamily="inherit">' + "\n" +
            f'{title}\n' +
            r'</Typography>' + "\n" +
            r'<Typography variant="h5" color="text.secondary" fontFamily="inherit">' + "\n" +
            f'{date}' + "\n" +
            r'</Typography>' + "\n" +
            r'<Typography variant="body1" color="text.secondary" fontFamily="inherit">' + "\n" +
            r'By Deepesh Nimma' + "\n" +
            r'</Typography>' + "\n" +
            r'</Box>' + "\n"
            )


def _create_paragraph(paragraph: str) -> str:
    print(f'Creating para -> {paragraph}')

    return (
            r'<Box sx={{width: "50%"}}>' + "\n" +
            r'<Typography variant="body1" fontFamily="inherit">' + "\n" +
            f"{paragraph}" + "\n" +
            r'</Typography>' + "\n" +
            r'</Box>' + "\n"
    )


def _create_picture(folder_name: str, pic: tuple[str, str], subfolder: str | None) -> str:
    print(f'Creating picture -> {folder_name}/{pic}')
    name, alt = pic

    if subfolder is None:
        return (
                r'<Box>' + "\n" +
                r'<img' + "\n" +
                r'src={require("../../data/blog/pictures/' + folder_name + r'/' + name + r'")}' + "\n" +
                r'alt={"' + alt + '"}' + "\n" +
                r'loading={"lazy"}' + "\n" +
                r'/>' + "\n" +
                r'</Box>' + "\n"
        )
    else:
        return (
                r'<Box>' + "\n" +
                r'<img' + "\n" +
                r'src={require("../../../data/blog/pictures/' + folder_name + r'/' + name + r'")}' + "\n" +
                r'alt={"' + alt + '"}' + "\n" +
                r'loading={"lazy"}' + "\n" +
                r'/>' + "\n" +
                r'</Box>' + "\n"
        )


def _create_reference(reference: str) -> str:
    print(f'Creating Reference -> {reference}')

    return (
            r'<Typography variant="body2" fontFamily="inherit">' + "\n"
                                                                   f'{reference}\n' +
            r'</Typography>' + "\n"
    )


def generate_body(post_name: str, subfolder: str | None, data: list[dict[str, str]]) -> tuple[list[str], list[str]]:
    print(f'Generating Body -> {post_name}')

    body = list()

    for item in data:
        if "reference" in item:
            break

        if "picture" in item:
            body.append(_create_picture(post_name, item["picture"], subfolder))
        else:
            body.append(_create_paragraph(item["paragraph"]))

    references = list()

    for item in data:
        if "reference" in item:
            references.append(_create_reference(item["reference"]))

    return body, references


def _create_reference_body(ref_list: list[str]) -> str:
    base_str: str = (
            r'<Box>' + "\n" +
            r'<Typography variant="h5" fontFamily="inherit">References</Typography>' + "\n"
    )

    for ref in ref_list:
        base_str += ref

    base_str += (
        r'</Box>'
    )

    return base_str


def read_post_data(filename: str) -> dict:
    """
    Reads the data from the json file and returns a json object. The json object contains all the information
    necessary to generate a blog post.
    :param filename: the file name to read the data from
    :return: the data in the json file as a dictionary
    """
    with open(f"../{filename}.json", "r") as file:
        return json.load(file)


def add_field(org_data: list[dict], key: str, value: typing.Any) -> list[dict]:
    print(f"Adding {key} with value: {value}")
    org_data.append(
        dict(
            [
                (
                    key,
                    value
                )
            ]
        )
    )

    return org_data


def add_all(org_data: list[dict], key: str, vals: list[typing.Any]) -> list[dict]:
    print(f"Adding all of {vals} with key: {key}")
    for val in vals:
        add_field(org_data, key, val)

    return org_data


def add_all_pics(org_data: list[dict], key: str, pics: list[str], alt_texts: list[str]) -> list[dict]:
    for i in range(len(pics)):
        temp = (pics[i], alt_texts[i])
        add_field(org_data, key, temp)

    return org_data


def organize_data(postData: dict) -> list[dict]:
    """
    Here's how we are going to organize the data.

    Heading/Title
    Date
    Picture 0 (if exists)
    Para 1
    Pic 1 (if exists)
    Para 2
    Pic 2 (if exists)
    Para 3
    Para 4
    etc

    References

    :param postData: the data of the post to be organized.
    :return: data of the post in an organized dict. We will then pass this dict to a generator to create the react tags.
    """
    org_post_data = list()

    # First add the heading
    add_field(org_post_data, "title", postData["title"])

    # Next add the date
    add_field(org_post_data, "date", postData["date"])

    pic_loc_stack: list[int] = list(postData["picture_locations"])
    pics: list[str] = list(postData["pictures"])
    alt_texts: list[str] = list(postData["alt_texts"])
    paragraphs: list[str] = list(postData["body"])
    i: int = 0
    tot: int = len(pics) + len(paragraphs)

    while i < tot:
        # If all pictures have been added, add all paragraphs
        if len(pics) == 0:
            add_all(org_post_data, "paragraph", paragraphs)
            break
        elif len(paragraphs) == 0:
            add_all_pics(org_post_data, "picture", pics, alt_texts)
            break

        if i == pic_loc_stack[0]:
            temp = (pics.pop(0), alt_texts.pop(0))
            add_field(org_post_data, "picture", temp)
            pic_loc_stack.pop(0)
        else:
            add_field(org_post_data, "paragraph", paragraphs.pop(0))

        i += 1

    # Append References
    add_all(org_post_data, "reference", postData["references"])

    return org_post_data


def generate_full_page(class_name: str, title: str, pp_list: list[str], refs: str) -> str:
    imports: str = (
        r'import {Box, Stack, Typography} from "@mui/material"'
    )

    base: str = imports + "\n" + (
            r'export const ' + class_name + r': React.FC = () => {' + "\n" +
            r'return (' + "\n" +
            r'<Stack gap={4} sx={{' + "\n" +
            r'alignItems: "center",' + "\n" +
            r'padding: "20px",' + "\n" +
            r'fontFamily: "Bahnschrift",' + "\n" +
            r'}}>' + "\n"
    )

    base += title

    for item in pp_list:
        base += item

    base += refs

    base += (
            "\n" +
            r'</Stack>' + "\n" +
            r')}'
    )

    return base


if __name__ == "__main__":
    print("Hello, World!")

    # Only Change These Variables
    jsonFilename: str = "first_post"  # omit the .json
    subfolder: str | None = "jun24"  # str | None
    class_name: str = "FirstPost"  # Name of the javascript class

    # Do not change anything below this
    data = read_post_data(jsonFilename)
    org_data = organize_data(data)

    title_str: str = _create_title(org_data)
    pp_list, reference_list = generate_body(jsonFilename, subfolder, org_data)
    reference_str_list = _create_reference_body(reference_list)

    base: str = generate_full_page(class_name, title_str, pp_list, reference_str_list)

    if subfolder is not None:
        if not os.path.exists(f'./../../../sections/blog/{subfolder}'):
            os.mkdir(f'./../../../sections/blog/{subfolder}')
        with open(f'./../../../sections/blog/{subfolder}/{jsonFilename}.tsx', 'w+') as file:
            file.write(base)
    else:
        with open(f'./../../../sections/blog/{jsonFilename}.tsx', 'w+') as file:
            file.write(base)

    print("Done.")
