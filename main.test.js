// need to test for each letter
import {expect, it} from '@jest/globals';
import {morseTranslate, wordTranslate} from "./main" 

it("should translate a to .-",()=>{
   const result = wordTranslate("a");
   expect(result).toBe(".-")
})
it("should translate a to -...",()=>{
   const result = wordTranslate("b");
   expect(result).toBe("-...")
})
it("should translate ab to .- -...",()=>{
   const result = wordTranslate("ab");
   expect(result).toBe(".- -...")
})
it("should translate a b to .- -...",()=>{
   const result = wordTranslate("a b");
   expect(result).toBe(".- / -...")
})

// it("should take a string and place each letter into an array",()=>{
//    const result = createArr("hello");
//    expect(result).toStrictEqual(["h","e","l","l","o"])
// })

it("should take a string, place each letter into an array, and then translate each letter",()=>{
   const result = wordTranslate("sos");
   expect(result).toBe("... --- ...");
})
it("should take morse and return a string",()=>{
   const result = morseTranslate(".-");
   expect(result).toBe("a");
})
it("should take a morse word and return a string, including spaces between words",()=>{
   const result = morseTranslate(".... .. / - .... . .-. .");
   expect(result).toBe("hi there");
})


