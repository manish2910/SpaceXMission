# SpaceXMission
SpaceX Programs API integrated in Frontend Application in Nextjs

Follow the below instruction to start the project
1. Clone this project.
2. Run npm install ( To install all the dependencies )
3. Then, Run npm run dev.
4. Project will start.
5. Click on this link http://localhost:3000.

# Project Details:

In this project I have used NextJs (ReactJs Framework) for Server Side Rendering.
Here you will find routes inside the pages folder though it was small project so I have worked on single route. Where I have use React Hooks for development of the project. 

Inside the project you will find the component folder where I have created reusable component inside shared folder i.e. Image, InputButton, Mission, MissionIdsList.

Then I have reused these component in the page.

# Pages

In pages folder you will find the 3 file i.e. index.js, _document.js, _app.js

I have created index.js for the main route to work on
_document.js is bascilly where we can define custom HTML, Body, etc. 
_app.js is created to make css file for global use where you can add style for any element inside project.

# Approach

I have used getIntialProps for server side rending get data of 100 mission of spaceX. 
After this we can filter the result as per desired by year, launch Success, land success.
After render the component to call api I have used useEffect, where I have used this as a a componentDidUpdate LifeCycle.

# Optimization

To optimize the project I have passed component inside the React.memo() so if there will be any changes in the dependencies of the component. Then only that component will be render.

# LightHouse ScreenShot
