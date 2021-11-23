let wordObj = {
   a: ".-",
   b: "-...",
   c: "-.-.",
   d: "-..",
   e: ".",
   f: "..-.",
   g: "--.",
   h: "....",
   i: "..",
   j: ".---",
   k: "-.-",
   l: ".-..",
   m: "--",
   n: "-.",
   o: "---",
   p: ".--.",
   q: "--.-",
   r: ".-.",
   s: "...",
   t: "-",
   u: "..-",
   v: "...-",
   w: ".--",
   x: "-..-",
   y: "-.--",
   z: "--..",
   " ": "/"
}

// export const createArr = (word) =>{
//       let wordArr = word.split("")
//       return wordArr
// }


// export const translate = (word) => {
//    let translation = ""
//    let wordArr = word.split("")
//    let morseArr = word.split(" ")
//    if (wordArr[0] in wordObj) {
//       for (let i = 0; i < word.length; i++) {
//          if (wordArr[i] in wordObj) {
//             console.log(wordArr[i])
//             translation = translation + wordObj[wordArr[i]]
//          } else if (wordArr[i] = " ") {
//             translation = translation + " "
//          }
//       }
//    } else if (reverseTranslate(morseArr[0]) in wordObj) {
//       for (let i = 0; i < word.split(" ").length + 1; i++) {
//          if (reverseTranslate(morseArr[i]) in wordObj) {
//             translation = translation + reverseTranslate(morseArr[i])
//          } else if (morseArr[i] === "/") {
//             translation = translation + " "
//          }
//       }
//    }
//    return translation
// }
const submitButton = document.querySelector(".button")
const translationInput = document.querySelector(".input")
const translationOutput = document.querySelector(".output")

submitButton.addEventListener("click",()=>{
   return translationOutput.innerHTML = `${translator(translationInput.value)}`
})

// export
 const reverseTranslate = (morse) => {
   return Object.keys(wordObj).find(key => wordObj[key] === morse);
}
// export
 const wordTranslate = (word) => {
   const wordArr = word.toLowerCase().split("")
   const morseArr = wordArr.map(w => wordObj[w]).join(" ")
   return morseArr
}
// export
 const morseTranslate = (word) => {
   const wordArr = word.split("/")
   const lettersArr = wordArr.map(w => w.split(" ").map(l => reverseTranslate(l)).join("")).join(" ")
   return lettersArr
}

// export
 const translator = (usertext) => {
    console.log(usertext)
 if (usertext.indexOf(".")===-1 || usertext.indexOf("-")===-1){
   return (wordTranslate(usertext))
}else {
   return (morseTranslate(usertext))
   }
}
