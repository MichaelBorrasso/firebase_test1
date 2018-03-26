var config = {
    apiKey: "AIzaSyCtpeaqwWBKUqudP7eD8lBrHpcnRonPl68",
    authDomain: "fir-test-ee078.firebaseapp.com",
    databaseURL: "https://fir-test-ee078.firebaseio.com",
    projectId: "fir-test-ee078",
    storageBucket: "",
    messagingSenderId: "739485936111"
};
firebase.initializeApp(config);

var database = firebase.database();
var auth = firebase.auth();
// watch for sign in of existing credentialed user (for return to their profile)

$("#btn-login-with-credetials").click(function () {
    event.preventDefault();
//get credentials from user input.
var email= $("#email").val().trim();
var password= $("password").val().trim();

console.log("i have been clicked");

firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    //Handle errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);

    firebase.database().ref().push({
        email: email,
        password: password,
    })
    firebase.auth().ref().push({
        email: email,
        password: password,   
    })
});
});

// firebase.auth().signOut().then(function() {
//     // Sign-out successful.
//   }).catch(function(error) {
//     // An error happened.
//   });



// ref = database.ref('items');

// ref.push({
//     item: "Get Milk",
//     completed: false,
//     archived: false
// })

// var result = ref.push({})
// console.log(result);