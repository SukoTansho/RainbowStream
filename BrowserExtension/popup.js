const config = require("config");

let clientId = config.twitch.clientId;
let clientSecret = config.twitch.clinetSecret;
let redirectURI = "http://localhost";

document.addEventListener("DOMContentLoaded", function () {
  var rainbowButton = document.getElementById("rainbowButton");
  rainbowButton.addEventListener("click", function () {
    // Füge hier deine Logik für den Button-Klick hinzu
    console.log("Button wurde geklickt!");
    sendMessageToBackground();
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   var loginButton = document.getElementById("loginButton");

//   loginButton.addEventListener("click", function () {
//     // Füge hier den Twitch OAuth-Flow hinzu
//     twitchLogin();
//   });

//   function twitchLogin() {
//     // Ersetze die folgende URL durch deine Twitch OAuth-URL
//     var twitchOAuthURL = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=token`;

//     // Öffne ein neues Tab für den Twitch-Login
//     chrome.tabs.create({ url: twitchOAuthURL }, function (tab) {
//       // Hier kannst du das Tab schließen oder andere Aktionen ausführen, wenn nötig
//     });
//   }
// });

// Funktion zum Senden einer Nachricht an background.js
function sendMessageToBackground() {
    chrome.runtime.sendMessage({ type: 'popupMessage', message: 'Nachricht vom Popup' }, function(response) {
      console.log('Antwort von background.js:', response);
    });
  }