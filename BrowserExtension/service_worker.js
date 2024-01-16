const REDIRECT_URL = chrome.identity.getRedirectURL();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "twitchToken") {
    // Speichere den Twitch OAuth-Token in der Chrome-Erweiterungs-Speicherung
    chrome.storage.local.set({ twitchToken: request.token }, function () {
      console.log("Twitch OAuth-Token gespeichert:", request.token);
    });
  }
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'popupMessage') {
      // Führe hier die gewünschte Funktion im background.js-Skript aus
      handlePopupMessage(request.message);
  
      // Antworte auf die Nachricht (optional)
      sendResponse({ status: 'Nachricht erhalten' });
    }
  });
  
  // Beispiel-Funktion, die im background.js-Skript aufgerufen wird
  function handlePopupMessage(message) {
    console.log('Nachricht vom Popup erhalten:', message);
  
    // Hier kannst du weitere Aktionen durchführen
  }