const synth = window.speechSynthesis;

document.querySelector('#talk').addEventListener('click', sayWord)

function sayWord() {

   const firstWord = document.querySelector('#firstWord').value
   const sayWordText = `${firstWord}`

   document.querySelector('#soundboard').innerText = sayWordText

   let sayWordThis = new SpeechSynthesisUtterance(sayWordText);

   synth.speak(sayWordThis);
   console.log (sayWordText)
}
