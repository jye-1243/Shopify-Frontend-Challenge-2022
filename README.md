# Shopify Frontend Challenge 2022
Shopify Summer 2022 Internship Frontend Challenge

This web application--"Spacestagram"--is an easy-to-use image display interface that gets images from NASA's Astronomy Picture of the Day (APOD) API and displays them, allowing users to scroll through, like and unlike posts, and search for specific dates.

### About the Project
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo
A demo of the app can be accessed [here](https://jye-1243.github.io/Shopify-Frontend-Challenge-2022/).

![Screenshot of the interface](https://github.com/jye-1243/Shopify-Frontend-Challenge-2022/blob/main/DemoScreenshot.PNG)

## Getting Started

### Prerequisites
This front-end web app was built with ReactJS. The requirements to run a React App can be installed by following the instructions [here](https://www.techomoro.com/how-to-install-and-setup-a-react-app-on-windows-10/).

### Installation

1. Clone this [git repository](https://github.com/jye-1243/Shopify-Frontend-Challenge-2022)
2. Register for an API key from [NASA](https://api.nasa.gov/)
3. Navigate to the `src` folder in your clone repository, and create a file called `config.json`
4. Within the new file, create a JSON object with value `{key : YOUR_KEY_HERE}`, where YOUR_KEY_HERE is your NASA API key.
5. Export your `config.js` file

## Usage

To run the app, navigate to the appropriate directory and run `npm start`. The app will load in http://localhost:3000/.
By default, the web application displays the ten most recent APOD results in reverse chronological order. The user may like and unlike each post as desired. An additional feature that was added to the base requirements is the sidebar, which tracks which photos have been liked and allows users to revisit them. Furthermore, there is a search functionality at the top of the page. The user may enter a YYYY-MM-DD formatted string for the APOD request corresponding to the entered date; if the user enters a date out of range or in the wrong format, an alert will be made and the user will be redirected to the default home screen.



