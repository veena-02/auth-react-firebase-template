import app from 'firebase/app';

const config={
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    apiId: process.env.REACT_APP_API_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

class Firebase{
    constructor(){
        app.initializeApp(config);
        this.auth=app.auth;
    }
    //Auth API
    doCreateUserWithEmailAndPassword=(email,password)=>
        this.auth.createUserWithEmailAndPassword(email,password);

    doSignInEmailAndPassword=(email,password)=>
        this.auth.signInWithEmailAndPassword(email,password);

    doSignOut = () =>
        this.auth.signOut();


    doPasswordUpdate=password =>
        this.auth.currentUser.updatePassword(password);    
};

export default Firebase;