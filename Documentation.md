This is a documentation about this assessment project. in this file you can find all information about project structure and about how you can run this.

# How to run the project

1- After cloning the project from repository, please run "npm i" inside the root of the project
2- After successfully dependencies installation, please run "npm run dev" inside the root of the project.
3- Wait to complete previous command and you will see some text like below:

VITE v5.1.2 ready in 262 ms

➜ Local: http://localhost:5173/
➜ Network: use --host to expose
➜ press h + enter to show help

4- you can open the local url in your browser.
5- Maybe it needs to wait few seconds for the first time runnig.
6- You can run tests with "npm test"

# Structure and design of the project
For this project I've used Redux-Toolkit design pattern with AsyncThunk. In the src folder you can see couple of folders that I'm going to explaing to you:

- assets: contains all assets like images.

- components: contains all reusable components that has been used in the project.
- components -> AuthGuard: contains Protected Route component that check the Authentication of the user in the protected routes.

- config -> APIUrls.ts: contains baseUrl and all endpoints for making API call.
- config -> config.ts: contains configs of the project like creating axios instance with baseUrl.

- pages: This folder contains all pages in the project like : Login, Dashboard, pages of Dashboard, and also I've designed it nested. for example all pages inside of Dashboard folder have been used inside of Dashboard component.

- redux -> asyncThunk: contains all API calls based on Redux-Toolkit design pattern.
- redux -> selectors: contains all selectors that I've used to select Redux states.
- redux -> slices: contains all slices to manage reducers, actions, and states in Redux.

- routes -> AppRouter: contains all routes of the project that I've developed with React-router-dom.
- routes -> routes.ts: contains an Object that show whole routes of the project and I've used this in the AppRouter and whereever have been needed.

- services : All axios requests that I've used in Redux Async-Thunk.

- utils -> helpers: contains all functions and helpers that I've used in the project.
- utils -> types: contains all types that I've used in the project.

# Styling Libraries
- JoyUI from Material UI and it's components
- SCSS modules

# Tests
I've written some tests for Login.tsx page that you can find them in: src -> pages -> login -> __test__ -> Login.test.tsx


// I've tried to implement an architecture that let the project to be maintainable and extensible and also every thing be reusable.