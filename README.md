# FM--Loopstudios--Landing-Page-

A captivating landing page for the fictional company, Loopstudios, an imaginative VR company. Dive into company's insights and cutting-edge innovations. Enjoy flawless responsiveness and accessibility, achieved by leveraging CSS Grid for an exquisite layout. Developed using Vite, React, and SCSS to ensure top-notch performance.

## Contents

- [Screenshot](#Screenshot)
- [Installation](#Installation)
- [Usage](#Usage)
- [Features](#Features)
- [Technologies Used](#Technologies-Used)
- [Contributing](#Contributing)

## Screenshot

<img src="./screenshot.jpg" alt= “” width="600px" >

## Installation

### Prerequisites

Before you begin, make sure you have the following tools installed:

<b>Node.js:</b> Make sure you have Node.js installed. You can download it from https://nodejs.org/.

### Step 1: Clone the Repository

Begin by cloning this repository to your local machine using Git:

```
git clone https://github.com/your-username/your-project.git
```

### Step 2: Navigate to the Project Directory

Navigate to the project directory that you just cloned:

```
cd your-project
```

### Step 3: Install Dependencies

Use npm to install the project dependencies:

```
npm install
```

This command will install all the necessary packages and libraries specified in the package.json file.

### Step 4: Start the Development Server

To start the development server and preview your application, run the following command:

```
npm run dev
```

This will start the development server using Vite, which provides fast and optimized development builds.

### Additional Configuration

```
npm run build
```

This will create an optimized build of your application in the dist directory.

## Usage

The Loopstudios VR Company website is a platform designed to introduce users to the world of virtual reality and showcase the company's impressive portfolio of VR products. The website consists of two main pages:

1. <b>Home Page:</b> The home page offers a brief introduction to Loopstudios and its mission in the world of virtual reality. It also features an interactive image section that uses CSS grid to present the company's VR creations in an appealing layout. Users can click anywhere on the image to access more information about the respective VR product.

2. <b>Not Found Page:</b> This page serves as a user-friendly 404 error page, providing a clear message and navigation options for lost visitors.

## Features

- Each "Creation" card is fully clickable, which allows users to click anywhere on the card. This is achieved with the following (https://piccalil.li/tutorial/create-a-semantic-break-out-button-to-make-an-entire-element-clickable/)

```
 &__link {

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
 }
```

This make this pseudo-element an absolutely positioned block element that will “break out” until it hits the bounds of a relative, absolute or fixed parent.

## Technologies Used

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

## Contributing

Contributions to the Scoot website are welcome! If you find any issues or would like to suggest enhancements, please <b>submit a pull request</b>.

```

```
