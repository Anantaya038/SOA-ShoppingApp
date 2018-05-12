/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 ons.ready(function(){
    var config = {
        apiKey: "AIzaSyBXeGB07oD6FU7RacPwK3zEwSUdb2uTJY4",
        authDomain: "reviewphuket-8ccf6.firebaseapp.com",
        databaseURL: "https://reviewphuket-8ccf6.firebaseio.com",
        projectId: "reviewphuket-8ccf6",
        storageBucket: "reviewphuket-8ccf6.appspot.com",
        messagingSenderId: "677044504242"
      };
      firebase.initializeApp(config);

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            ons.notification.toast('Welcome, ' + user.displayName, { timeout: 2000 }).then(function (name) {
                window.location.replace('home.html?userid=' + user.email);
            });
        } else {
            window.location.replace('login.html');
        }
      });
 })

var app = {
  // Application Constructor
  initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
      this.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
      var parentElement = document.getElementById(id);
      var listeningElement = parentElement.querySelector('.listening');
      var receivedElement = parentElement.querySelector('.received');

      

      listeningElement.setAttribute('style', 'display:none;');
      receivedElement.setAttribute('style', 'display:block;');

      console.log('Received Event: ' + id);
  }
};

app.initialize();