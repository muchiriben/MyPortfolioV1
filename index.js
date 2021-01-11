const myname = 'Benard Muchiri.'
const role = 'And am a Developer.'

var cursor = true;
var speed = 250;

let index = 0;
let index3 = 0;
let index2 = 0;

setInterval(() => {
    if(cursor) {
      document.getElementById('cursor-name').style.opacity = 0;
      cursor = false;
    }else {
      document.getElementById('cursor-name').style.opacity = 1;
      cursor = true;
    }
  }, speed)

function writeRole() {
    document.getElementById('role').innerText = role.slice(0, index2);
        index2++;
}  
 
function writeName() {
    document.getElementById('name').innerText = myname.slice(0, index);
    index++;

    if(index > myname.length) {
        document.getElementById('name').innerHTML += "<br>";
        writeRole();
    }      
}


setTimeout(() => {  setInterval(writeName, 400) }, 2800);