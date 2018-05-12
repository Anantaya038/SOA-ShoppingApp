var config = {
    apiKey: "AIzaSyBXeGB07oD6FU7RacPwK3zEwSUdb2uTJY4",
    authDomain: "reviewphuket-8ccf6.firebaseapp.com",
    databaseURL: "https://reviewphuket-8ccf6.firebaseio.com",
    projectId: "reviewphuket-8ccf6",
    storageBucket: "reviewphuket-8ccf6.appspot.com",
    messagingSenderId: "677044504242"
  };
  firebase.initializeApp(config);

  $("#signup").click(function(){
    
  var email = $("#email").val();
  var password = $("#password").val()

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            ons.notification.toast('Welcome, ' + user.displayName, { timeout: 5000 }).then(function (name) {
                var dataform = {
                    "address": "blank",
                    "email": user.email,
                    "lastname": user.displayName.split(' ')[1],
                    "name": user.displayName.split(' ')[0],
                    "password": "facebook",
                    "telno": "blank"
                }
                $.ajax({
                    headers: { 
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' 
                    },
                    url : "https://customer-api-shopping.herokuapp.com/api/customers/",
                    type : "POST",
                    data : dataform,
                    dataType : "json",
                    success: function(data) {
                        if (data) {
                            ons.notification("Signup Success")
                        }else{
                            ons.notification("Signup Fail")
                        }
                    }
                })
                window.location.replace('home.html?userid=' + user.email);
            });
        } else {
            ons.notification.alert(errorMessage);
        }
    });

    
    // Handle Errors here.
   
    // ...
  });
  })
