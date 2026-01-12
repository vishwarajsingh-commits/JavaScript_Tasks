let aud_F5 = new Audio("key/F5.mp3");
let aud_Fsh5 = new Audio("key/Gb5.mp3");
let aud_G5 = new Audio("key/G5.mp3");
let aud_Gsh5 = new Audio("key/Ab5.mp3");
let aud_A5 = new Audio("key/A5.mp3");
let aud_Ash5 = new Audio("key/Bb5.mp3");
let aud_B5 = new Audio("key/B5.mp3");
let aud_C6 = new Audio("key/C6.mp3");
let aud_Csh6 = new Audio("key/Db6.mp3");
let aud_D6 = new Audio("key/D6.mp3");
let aud_Dsh6 = new Audio("key/Eb6.mp3");
let aud_E6 = new Audio("key/E6.mp3");
let aud_F6 = new Audio("key/F6.mp3");
let aud_Fsh6 = new Audio("key/Gb6.mp3");
let aud_G6 = new Audio("key/G6.mp3");
let aud_Gsh6 = new Audio("key/Ab6.mp3");
let aud_A6 = new Audio("key/A6.mp3");
let aud_Ash6 = new Audio("key/Bb6.mp3");
let aud_B6 = new Audio("key/B6.mp3");

var body = document.querySelector("body");


// let key_F5 =   document.querySelector("6")
// let key_Fsh5 = document.querySelector("7")
// let key_G5 =   document.querySelector("8")
// let key_Gsh5 = document.querySelector("9")
// let key_A5 =   document.querySelector("10")
// let key_Ash5 = document.querySelector("11")
// let key_B5 =   document.querySelector("12")
// let key_C6 =   document.querySelector("13")
// let key_Csh6 = document.querySelector("14")
// let key_D6 =   document.querySelector("15")
// let key_Dsh6 = document.querySelector("16")
// let key_E6 =   document.querySelector("17")
// let key_F6 =   document.querySelector("18")
// let key_Fsh6 = document.querySelector("19")
// let key_G6 =   document.querySelector("20")
// let key_Gsh6 = document.querySelector("21")
// let key_A6 =   document.querySelector("22")
// let key_Ash6 = document.querySelector("23")
// let key_B6 =   document.querySelector("24")
const keyMap = {
  "q": aud_F5,
  "2": aud_Fsh5,
  "w": aud_G5,
  "3": aud_Gsh5,
  "e": aud_A5,
  "4": aud_Ash5,
  "r": aud_B5,
  "t": aud_C6,
  "6": aud_Csh6,
  "y": aud_D6,
  "7": aud_Dsh6,
  "u": aud_E6,
  "i": aud_F6,
  "9": aud_Fsh6,
  "o": aud_G6,
  "0": aud_Gsh6,
  "p": aud_A6,
  "-": aud_Ash6,
  "[": aud_B6,
};


document.addEventListener("keydown", (event) => {
  const audio = keyMap[event.key];
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
});