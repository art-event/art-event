/* // music
var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};
 */



// steps for isolation
// 1.get all elements in the nav bar
// 2.have event lister for all of them
// 3.get all the children of content
// 4.hide all but the one respective to the nav element

// 1
const linksRAW = document.getElementsByClassName("conLink")
const links = Array.prototype.slice.call(linksRAW)
const contentRAW = document.getElementsByClassName("acCon")
const content = Array.prototype.slice.call(contentRAW)
console.log(content)
links.shift()


 for(var i = 0; i < links.length; i++) {
       links[i].addEventListener("click", isolate(i));
 }
// 2
 function isolate(elem) {

    return function() {
         for(var i = 0; i < links.length; i++) {
             // console.log(links[i].getAttribute("href"))
             // console.log(content.length)
             content[i].style.display = "none"
             // content[i].style.display = "none"
             // content[i].style.display = "none"
         }
            content[elem].style.display = "block"
            // content[i].style.display = "block"
    };
 }
