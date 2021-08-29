<img src="./src/assets/banner.svg" alt="logo" width="100%" />

## CellOverflow 🧑‍⚕️

Lets take control of your health, Together

CellOverflow is a web application where users can ask questions or answer.

> Its basically [StackOverflow](https://stackoverflow.com/) but for health 😉

### Features 🌟

- Ask question ❓
- Answer questions 📝
- Up vote & down vote ⬆️
- Edit bio ✏️
- Login with google 😀

### Setup 👷‍♂️

> You need node js, npm & firebase project 😉

<u>Setup Firebase 🔥</u>

go to [Firebase Console](https://console.firebase.google.com)

- Create a project
- Enable authentication & firestore
- Create new web app
- Copy the firebase config

create a new file in `./src/firebase/firebaseConfig.js` and paste them as shown below

```javascript
// the idea is just to export the firebaseConfig

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

export default firebaseConfig;
```

<u>Local Server Setup 💩</u>

Install dependencies

```bash
$ npm install
# Or Yarn
$ yarn install
```

Start development server

```bash
$ npm start
# Or yarn
$ yarn start
```

<u>Watch The Best Video [ Optional But Recommended ] 📺</u>

[Watch Video](https://youtu.be/dQw4w9WgXcQ)



### Contributors 🌟

- [@fadhilsaheer](https://github,com/fadhilsaheer)

