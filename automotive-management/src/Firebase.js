import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    //YOUR_API_KEY
    apiKey: "xxx",
    authDomain: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx",
    appId: "xxx",
    measurementId: "xxx"   
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;

