// Write your code here!

const mainHtml = document.getElementById("main")
const newHeader = document.createElement('h1')


mainHtml.remove();

newHeader.id = "victory";

newHeader.innerHTML = "YOUR-NAME is the champion";

document.body.append(newHeader);