ons.ready(function () {
    var config = {
        apiKey: "AIzaSyBXeGB07oD6FU7RacPwK3zEwSUdb2uTJY4",
        authDomain: "reviewphuket-8ccf6.firebaseapp.com",
        databaseURL: "https://reviewphuket-8ccf6.firebaseio.com",
        projectId: "reviewphuket-8ccf6",
        storageBucket: "reviewphuket-8ccf6.appspot.com",
        messagingSenderId: "677044504242"
    };
    firebase.initializeApp(config);

    $("#signin").click(function () {
        var email = $("#email").val();
        var password = $("#password").val()

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    ons.notification.toast('Welcome, ' + user.displayName, { timeout: 2000 }).then(function (name) {
                        window.location.replace('home.html?userid=' + user.email);
                    });
                } else {
                    ons.notification.alert(errorMessage);
                }
            });
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    })



})