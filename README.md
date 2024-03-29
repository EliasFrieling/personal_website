# Personal Website For Computer Science Students

This is my personal website, feel free to clone it and use it as a template for yourself!
<img src="https://i.ibb.co/0BhxTj0/Screenshot-from-2021-08-12-15-20-21.png" alt="Website image"/>

## Installation

### Fork the repo

Use git to [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repository

### Install it in your local environment

Once you've decided where you are going to store the repo, **[clone it](https://help.github.com/articles/cloning-a-repository/)**.

## Configuring the website

After you've cloned the repo, you need to configure a `.env` file. In the source directory create a file called `.env` and add the following lines to it

```
REACT_APP_BACKGROUND_VIDEO=(url to an mp4 or file path to a mp4)
REACT_APP_PROFILE_PICTURE=(url to an picture or file path to a picture)
REACT_APP_PROJECT1=(url to an picture or file path to a picture)
REACT_APP_PROJECT2=(url to an picture or file path to a picture)
REACT_APP_PROJECT3=(url to an picture or file path to a picture)
REACT_APP_PROJECT4=(url to an picture or file path to a picture)
REACT_APP_GITHUB=(url)
REACT_APP_LINKEDIN=(url)
REACT_APP_TWITTER=(url)
REACT_APP_EMAIL=(mailto:example@email.com)
```

These files will consist of the video background on the home page, the profile picture in the about section, and the pictures on the cards in the projects sections. There are tons of great sites with stock photos and videos out there, I used undraw.co and www.pexels.com

## Running the website

To run the website open a terminal and run

```bash
npm install
npm start
```

From there everything should be working!

## License

[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/EliasFrieling/personal_website/blob/main/LICENSE.txt)
