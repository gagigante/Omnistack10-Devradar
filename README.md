<h1 align="center">
    <img alt="Devradar" title="#Devradar" src=".github/download.svg" width="250px" />
</h1>

<h4 align="center">
  Devradar
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gagigante/Omnistack10-Devradar">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gagigante/Omnistack10-Devradar">
  
  <a href="https://github.com/gagigante/Omnistack10-Devradar/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gagigante/Omnistack10-Devradar">
  </a>

  <a href="https://github.com/gagigante/Omnistack10-Devradar/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/gagigante/Omnistack10-Devradar">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

<p align="center">
  <a href="#rocket-tecnologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#runner-how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<br>

<p align="center">
  <img alt="Frontend" src=".github/devradar.png" width="100%">
</p>

## :rocket: Tecnologies

This project was developed with the following techs:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [MongoDB](https://www.mongodb.com/)


## 💻 Project

This project was developed to help developers find each other by location and technologies of interest.

## :runner: How to run

### BACKEND: 
### Just access the fold `backend` and run:

To install dependences
```
  $ yarn
  
  or

  $ npm install
```
To start de server
```
  $ yarn dev

  or

  $ npm dev
```

### WEB: 
### Just access the fold `web` and run:

To install dependences
```
  $ yarn
  
  or

  $ npm install
```
To start de server
```
  $ yarn start

  or

  $ npm start
```

### MOBILE: 
### First you need to edit the file `api.js` and `socket.js` with your current IP address. 

mobile/src/services/api.js
```
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://YOUR_IP_ADDRESS:3333',
});

export default api;
```

mobile/src/services/socket.js
```
import socketio from 'socket.io-client';

const socket = socketio('http://YOUR_ID_ADDRESS:3333', {
  autoConnect: false,
});
```

### So access the fold `mobile` and run:
To install dependences
```
  $ yarn
  
  or

  $ npm install
```
To start de server
```
  $ yarn start

  or

  $ npm start
```

## 🤔 How to contribute

- Fork this repo;
- Create a branch for your new feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My brand new feature'`;
- Push it to your branch: `git push origin my-feature`.

After merge of your pull request, you can delete your branch.

## :memo: License

This project is under MIT license. See the file [LICENSE](LICENSE) for details.

---

[Visit my website!](https://www.ggportfolio.com.br)
