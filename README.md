# futureSkills

## Therothical Question
-
    Q 1. **How can you implement shared functionality across a component tree?**
    Ans:     
        **1 Use Context API:** Create a context to share data or functions:
            1. `Create a Context`
                **import React, { createContext } from 'react';**
                **const MyContext = createContext();**
            2. `Provide the Context`
                    <MyContext.Provider value={{state}}>
                        {children}
                    </MyContext.Provider>
            3. `Consume the Context`
                **import { useContext } from 'react';**
                **import { MyContext } from './MyProvider';**
                **const { state, sharedFunction } = useContext(MyContext);**

-
        **2 Use Custom Hooks:** Create reusable functions (hooks) that other components can use:
            1. `Create a Custom Hook`
                **import { useState } from 'react';**
                **const [value, setValue] = useState('default value');**
            2. `Use the Hook in Components`
                **onChange={(e)=>setValue(e.target.value)}**

-
        **Higher-Order Components (HOCs):** Wrap components with additional functionality:
            1. `Create an HOC`
            2. `Use the HOC`


-
    Q 2.**Why is the `useState` hook appropriate for handling state in a complex component?**
    Ans:
        1. `Local State`: Manages state only within the component, keeping it organized.
        2. `Easy Updates`: Lets you update state easily with simple functions.
        3. `Multiple States`: You can have several state variables in one component.
        4. `Auto Re-render`: Updates the component automatically when state changes.
        5. `Functional Components`: Works with functional components, which are simpler than class components.
        6. `Testing`: Makes components easier to test because state is isolated.
        7. `Works with Effects`: Integrates well with useEffect for handling side effects.




# Project Setup Guide

## Installation
   - **frontend**: 
      1. open cmd and go to your projcet folder
      2. for go to frontend folder `cd frontend`
      3. for install dependencies `npm i axios validator`
      4. for start the frontend project `npm start`

   - **server**: 
      1. open cmd and go to your projcet folder
      2. for go to backend folder `cd server`
      3. for install dependencies `npm i mongodb core express`
      4. for start the backend project `node index.js`


## Overview

This project has two main components:

- **Frontend**: Built with React.js, located in the `frontend` folder.
- **Backend**: Built with Node.js and Express.js located in the `server` folder. It connects to a MongoDB database hosted on MongoDB Atlas.

## Frontend

### How to Start the Frontend:

1. **Navigate to the `frontend` folder:**

   Open your terminal and change to the `frontend` directory.

2. **Install the dependencies:**

   Run the installation command for the project dependencies.

3. **Start the development server:**

   Launch the frontend application in your browser.

### Frontend Dependencies:

- **axios**: For making HTTP requests.
- **validator**: For check the input type.




## Backend

### How to Start the Backend:

1. **Navigate to the `server` folder:**

   Open your terminal and change to the `server` directory.

2. **Install the dependencies:**

   Run the installation command for the backend dependencies.

3. **Start the server:**

   Launch the backend server.

### Backend Dependencies:

- **core**: Utility functions and modules.
- **express**: Web framework for Node.js.
- **mongodb**: Driver for connecting to MongoDB.

## Connecting to the Database

The backend connects to MongoDB using MongoDB Atlas.

### Steps to Connect to MongoDB Atlas:

1. **Create a MongoDB Atlas account and set up a cluster:**

   Sign up or log in to MongoDB Atlas and create a new cluster.

2. **Get the connection string:**

   In MongoDB Atlas, get the connection string from your cluster’s connection settings.

3. **Configure your backend:**

   Add the connection string to your backend configuration to connect to the MongoDB database.
   