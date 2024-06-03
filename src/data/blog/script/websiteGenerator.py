import json
import typing


def read_post_data(filename: str) -> dict:
    """
    Reads the data from the json file and returns a json object. The json object contains all the information
    necessary to generate a blog post.
    :param filename: the file name to read the data from
    :return: the data in the json file as a dictionary
    """
    with open(f"./../{filename}.json", "r") as file:
        return json.load(file)


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
    etc
    etc

    References

    :param postData: the data of the post to be organized.
    :return: data of the post in an organized dict. We will then pass this dict to a generator to create the react tags.
    """
    post_data = list()


if __name__ == "__main__":
    print("Hello, World!")

    # Only Change These Variables
    jsonFilename: str = ""

    # Do not change anything below this
    data = read_post_data(jsonFilename)
