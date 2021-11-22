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
   }

// export const createArr = (word) =>{
//       let wordArr = word.split("")
//       return wordArr
// }
   
export const reverseTranslate = (morse)=> {
   return Object.keys(wordObj).find(key => wordObj[key] === morse);
 }

export const translate = (word) =>{
   let translation = ""
   let wordArr = word.split("")
   let morseArr= word.split(" ")
   if (wordArr[0] in wordObj){
      for (let i=0; i<word.length; i++){
         if (wordArr[i] in wordObj){
            console.log(wordArr[i])
            translation = translation + wordObj[wordArr[i]] 
         }else if (wordArr[i]=" "){
         translation = translation + " "
         }
      }
         }else if (reverseTranslate(morseArr[0]) in wordObj){
         for (let i =0; i<word.split(" ").length+1;i++){
            if (reverseTranslate(morseArr[i]) in wordObj){
            translation = translation + reverseTranslate(morseArr[i])
            }else if (morseArr[i]==="/"){
            translation = translation + " "
            }
         }
      }
      return translation
}

