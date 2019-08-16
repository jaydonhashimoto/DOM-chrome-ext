var elements = [...document.body.getElementsByTagName('*')];

//a function that loops through every single item
function findAndReplace() {
  elements.forEach(element => {
    element.childNodes.forEach(child => {
      if (child.nodeType === 3) {
        replaceText(child);
      }
    });
  });
}

function replaceText(node) {
  let value = node.nodeValue;
  value = value.replace(/a/gi, 'a̳');
  value = value.replace(/e/gi, 'ẹ̙̪̯̦͠');
  value = value.replace(/i/gi, 'i̢͈̙̣');
  value = value.replace(/o/gi, 'o̵̰̥͓̻͈');
  value = value.replace(/u/gi, 'u͎̘');
  node.nodeValue = value;
}

//get all image tags
let images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
  //send msg to background script
  chrome.runtime.sendMessage({ msg: 'image', index: i }, function({
    data,
    index
  }) {
    images[index].src = data.link;
  });
}

window.onload = findAndReplace();
