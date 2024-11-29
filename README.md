# Dashboard Template

This project is a new dashboard template built using Create React App, Flowbite, Tailwind CSS, and Recharts. It includes various widgets like line charts, pie charts, and bar charts (both vertical and horizontal) to display dummy data, along with a timeline and a table. Each chart is rendered inside a widget card with a title and tools for user interaction, such as fullscreen and collapse, to allow users to adjust the UI.

## Features

- **Charts**: Displays line charts, pie charts, and bar charts (vertical and horizontal) to visualize dummy data.
- **Widget Cards**: Each chart is placed inside a widget card, containing a title and interactive tools (fullscreen and collapse) to allow users to modify the UI.
- **Dark Mode & Light Mode**: Toggle between dark mode and default mode via the top navbar.
- **Sidebar**: A sidebar for navigation between different sections of the dashboard.
- **Drag-and-Drop**: Uses `react-dnd` to enable users to sort widgets within the dashboard using any sorting methodology.
- **State Management**: Utilizes Redux Toolkit for managing state, specifically saving the dark theme and fullscreen functionality across components.
- **Typescript**: Written in TypeScript for strong type-checking and improved maintainability.
- **UI Design**: Leverages the grid system from Material UI (MUI) and Material UI icons for a modern UI design.


## Screenshots
![image](https://github.com/mansourelbash/react-report-dashboard/blob/main/public/screenshots/dashborad.png)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include hashes.\
Your app is ready to be deployed!

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mansourelbash/react-report-dashboard.git
