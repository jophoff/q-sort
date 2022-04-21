// Initialize Firebase
var config = {
	apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();