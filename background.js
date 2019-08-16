console.log('Pikachu Everywhere - Background Script is Running');

//listen to messages in the extension
chrome.runtime.onMessage.addListener(function(message, sender, senderResponse) {
  //fetch image when a message is received
  if (message.msg === 'image') {
    fetch('https://some-random-api.ml/pikachuimg')
      .then(response => response.text())
      .then(data => {
        let dataObj = JSON.parse(data);
        senderResponse({ data: dataObj, index: message.index });
      })
      .catch(error => console.log('error', error));
    return true; // Will respond asynchronously.
  }
});
