# Mock Interview Platform
This app was designed to help both aspiring and current programmers improve their technical coding skills by pairing two users to perform a mock interview with each other. Once the interview has finished, both users will provide feedback for the other user on their strengths and weaknesses. 
<br><br>

## Contributors:
[Kevin Yi](https://github.com/kyi193), [Nafis Uddin](https://github.com/nuddin175), [Tim Rines](https://github.com/tsrines)

## Built With
### Frontend:
* [React](https://reactjs.org/) - The framework used for developing the components and UI.
* [Material UI](https://material-ui.com/) - Javascript framework for styling and CSS compartmentalization.
* [Simple Peer](https://github.com/feross/simple-peer) - WebRTC wrapper used to create 2 way video chat connection.

### Backend: 
* [Node JS](https://reactjs.org/)/[Express JS](https://expressjs.com/) - Backend used for our API routes.
* [Mongo DB/Atlas](https://www.mongodb.com/) - Database used to store our user and application data.
* [Socket.IO](https://socket.io/) - JavaScript library for creating real-time lobby and interview rooms.

## Features:
* User login/sign up authentication.
* Randomly selected interview questions based on the user's current skill level.
* Real-time code change updates on screen.
* Two-way video chat functionality using WebRTC.
* Upcoming/past practice interview dashboard for easy user experience.

## Installation:
You can try the application at [mock-interview-platform.herokuapp.com](https://mock-interview-platform.herokuapp.com/).  
If you want to run it locally follow the instructions below:
1. Clone repository
2. Install Dependencies - Run ```npm install``` in the root directory and client directory
3. Create a file with the name ```.env```
4. Add the application secret key for authentication using ```SECRET_KEY``` to ```.env```
5. Add the application mongo uri ```MONGO_LOCAL_URI``` to ```.env```. Additional information to run mongoDB locally can be found [here](https://docs.mongodb.com/manual/installation/). Alternatively you can use Mongo Atlas [here](https://www.mongodb.com/cloud/atlas).
6. To run code from the code editor, create an account on [glot.io](https://glot.io/). You can find your api key after registering [here](https://glot.io/account/token). Add glot token ```GLOT_TOKEN``` to ```.env```.
7. Sign up for [AWS S3](https://aws.amazon.com/s3/) and add ```S3_ACCESS_KEY```, ```S3_ACCESS_SECRET``` and ```S3_BUCKET_NAME``` to ```.env```
8. Final ```.env``` should like below: 
```
SECRET_KEY=<Secret key for passport.js>
MONGO_LOCAL_URI=<Your mongo uri>
GLOT_TOKEN="Token <Your glot token>"
S3_ACCESS_KEY=<Your S3 access key>
S3_ACCESS_SECRET=<Your S3 secret>
S3_BUCKET_NAME=<Your bucket name>
```
9. Run ```npm run dev``` to start the server on the root directory and ```npm start``` on client to start the application

## Features:
### Login/Signup Authentication:
![](https://media4.giphy.com/media/oSnlEVJ3J7kSeQQTqC/giphy.gif)
<br>
### Real time code changes/video chat
<img src="https://i.imgur.com/mVP1OPk.png" width="750" height="425">

### Check your past practice interview details and feedback
<img src="https://media0.giphy.com/media/tT2R1pMsyZTGD9lgV7/giphy.gif" width="600" height="341">

### Deployed with:
* [Heroku](https://www.heroku.com/)
