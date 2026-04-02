const word = [{
  word"`
}, {
  word."`
}, {
}];

let btn = document.querySelector("#Abtn");
let word = document.querySelector(".word");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * word.length);
    
    word.innerHTML = word[random].word;
});
