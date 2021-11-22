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
   


export const translate = (word) =>{
   let translation = ""
   let wordArr = word.split("")
      for (let i=0; i<word.length; i++){
         if (wordArr[i] in wordObj){
            console.log(wordArr[i])
            translation = translation + wordObj[wordArr[i]]
      }else if (wordArr[i]=" "){
         translation = translation + " "
      }
   }return translation
}