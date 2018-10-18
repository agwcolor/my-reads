my-reads
=====================

# My Reads Book App

## Table of Contents
* [Installation](#installation)
* [Instructions](#instructions)
* [Background](#background)
* [Dependencies](#dependencies)
* [Contributing](#contributing)
* [License](#license)

## Installation

To install the app on your desktop:
1. Navigate to https://github.com/agwcolor/My-Reads 
2. Click the green 'Clone or Download' button to copy the directory or zipfile to your desktop machine.
3. If you have a zipfile, extract it.
4. From inside the my-reads folder, install any node-module dependencies using 
    ````npm install --save ````
    You will need the following : react, react-dom, react-router-dom . IF you have problems, please check the the package.json file for reference.  Note : Not all dependencies listed there are required.
5. From inside the my-reads folder, run ````npm start````.  
   A browser window will open up to http://localhost:3000/ .  


## Instructions

This is the My Reads book app

1. (/search) - Find a book | Change categories : Click the "+" icon on the lower right side of the screen to open the search page. Search for books by both title and author. The page will dynamically update as you type.  You can change the category for each book - Currently Reading, Want to Read, Reading, None (will remove from view) . The category will persist on the main page.

2. (/) - See your books | Change cagegories : On the main page you can see the books that you are currently Reading, Want to Read, or have Read. Change the categories as you need to from here using the small arrow next to each book icon. 

## Background
This project demonstrates an example of a React Controlled component where the UI dynamically updates as the user interacts with it (e.g. the book categories and the search bar). The state of the React data is always up to date, the "single source of truth", and creates a dynamic user experience. (https://reactjs.org/docs/uncontrolled-components.html)

This project also implements routing using <Browser Router> which uses the HTML5 history API to keep the UI in sync with the URL (https://reacttraining.com/react-router/web/api/BrowserRouter). 

For more about how the project is set up see : [Project Overview](Overview.md) 

## Dependencies
Using NPM install, install the following project dependencies in the /my-reads folder from the command line if you don't have them already.  Check the package.json file if you have any issues. :

"react": "^16.5.2",
"react-dom": "^16.5.2",
"react-router-dom": "^4.3.1"

You will need internet access. The BooksAPI.js relies on some data on remote servers.

## Contributing

Ideas regarding how to approach this project were were found in Udacity course resources, especially using the walkthrough by Ryan Waite (https://www.youtube.com/watch?v=N8bU1oWlLwY&feature=youtu.be), the Knowledge Boards, as well as Udacity course materials on React, React JS (https://reactjs.org/), and Stack Overflow. 

## License

MIT License

Copyright (c) [2018] [Abbie Weisenbloom]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---------------------------------------