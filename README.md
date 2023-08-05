
# AuthenticationApi :triangular_flag_on_post:	:triangular_flag_on_post:	

An authentication REST API that allows user to sign up and log in locally or using google Oauth2. Besides, Registered users can retrieve their data through a specific endpoint and the access token (json web token). This API was built implementing the clean architecture.


## Technologies implemented

- Nodejs
- Espress
- Typescript
- MongoDB
- ODM: Typegoose
- jsonwebtoken
- Google OAuth2

  

<p align="left"> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`POST`

`DATABASE`

`PRIVATE_KEY`

`PUBLIC_KEY`

`GOOGLE_CLIENT_ID`

`GOOGLE_CLIENT_SECRET`

Note: `DATABASE` is the link to connect to mongoDB

## How to use this project 🚀

- step 1: Set all environment variables listed above.

- step 2: You can use the following npm script to run this project:

    `npm run dev`: to run the project on the development environment with typescript

    `npm build` and then `npm start`: to run the project in javascript


## Documentation

You can check out online documentation to get all the informacion
[Documentation](https://documenter.getpostman.com/view/17224019/2s9XxwvDm7)

## Integration with the Frontend

-Login
![1login](https://github.com/santiagoTrivi/authenticationApi-typescript/assets/114887991/1edd1ae9-f62d-4482-9734-9fc1f729437b)

- Login: password authentication
![2login](https://github.com/santiagoTrivi/authenticationApi-typescript/assets/114887991/c2641840-c6ce-4dda-a46d-b331e654b709)

- login: user not found
![3login](https://github.com/santiagoTrivi/authenticationApi-typescript/assets/114887991/b2b9ebd4-52bd-4cee-8f92-a2a56be9b419)

- Signup
![4signup](https://github.com/santiagoTrivi/authenticationApi-typescript/assets/114887991/f50ad062-909a-4f02-b2d5-3b4d7bbb62b4)

- Signup: Username already registered
![5signup](https://github.com/santiagoTrivi/authenticationApi-typescript/assets/114887991/a127863f-e636-40fd-9c5e-4915ef7251c8)


