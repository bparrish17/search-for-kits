# Search for Kits Demo Application

## Getting Started

1. Clone this directory
2. Run `npm run install-modules`
3. Run `npm run start-dev` to start both backend and frontend server
4. Navigate to `localhost:3000` in your browser if it does not automatically open

API routes will be served by `localhost:3001` (as well as the app if it has been built)

## Important Notes on Functionality

The front-end simply provides an autocomplete UI for searching on kits based on their Label ID. When the kit is selected by label, we make a call to `getKitByID` to fetch that kit's information. However, this is silly because we already have all the data we need from the search call. I chose to use a separate endpoint in this case to simulate how an application would likely work where a search call would not return a full model from the database. Notably, both of these endpoints will attempt to reference a cached version of the full kits list, as I figured it would be faster without using that much memory since its just a singleton server controller. In the case of `getKitByID` it will reference a map of the kits key'd by their IDs so it will have a constant lookup time. I chose not to use a proper database here as I felt it may be more difficult creating a replicable local environment for the sake of demoing, but obviously as a production application this would not read data from a local JSON file. 

## Other Available Scripts

### Client 

- `npm test`: Launches the test runner in the interactive watch mode
- `npm run build`: Builds the app for production to the `build` folder

### Server 
- `npm test`: Launches the jest test runner in your node instance


