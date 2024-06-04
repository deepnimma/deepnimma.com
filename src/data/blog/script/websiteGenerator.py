import json
import logging
import typing


def _create_title(data: list[dict]) -> str:
    title: str = data.pop(0)["title"]
    date: str = data.pop(0)["date"]
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
    return (
        r'<Box sx={{width: "50%"}}>' + "\n" +
        r'<Typography variant="body1" fontFamily="inherit">' + "\n" +
        f"{paragraph}" + "\n" +
        r'</Typography>' + "\n" +
        r'</Box>' + "\n"
    )


def _create_pictures(folder_name: str, pic: str) -> str:
    return (
        r'<Box>' + "\n" +
        r'<img' + "\n" +
        r'src={require("../../data/blog/pictures/' + folder_name + r'/' + pic + r'")}' + "\n" +
        r'loading={"lazy"}' + "\n" +
        r'/>' + "\n" +
        r'</Box>'
    )


def _create_references(refs: list[str]) -> list[str]:
    return list()


def generate_page_file(title: str) -> None:
    return


def generate_route_file(titles: list[str]) -> None:
    return


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
    logging.debug(f"Adding {key} with value: {value}")
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
    logging.debug(f"Adding all of {vals} with key: {key}")
    for val in vals:
        add_field(org_data, key, val)

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
    paragraphs: list[str] = list(postData["body"])
    i: int = 0
    tot: int = len(pics) + len(paragraphs)

    while i < tot:
        # If all pictures have been added, add all paragraphs
        if len(pics) == 0:
            add_all(org_post_data, "paragraph", paragraphs)
            break
        elif len(paragraphs) == 0:
            add_all(org_post_data, "picture", pics)
            break

        if i == pic_loc_stack[0]:
            add_field(org_post_data, "picture", pics.pop(0))
            pic_loc_stack.pop(0)
        else:
            add_field(org_post_data, "paragraph", paragraphs.pop(0))

        i += 1

    # Append References
    add_all(org_post_data, "reference", postData["references"])

    return org_post_data


if __name__ == "__main__":
    print("Hello, World!")

    # Only Change These Variables
    jsonFilename: str = "first_post"  # omit the .json

    # Do not change anything below this
    data = read_post_data(jsonFilename)
    org_data = organize_data(data)

    print(org_data)
    print(_create_title(org_data))
    print(_create_pictures("first_post", "TEST_JPG.jpg"))
    print(org_data)