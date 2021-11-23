// need to test for each letter
import {expect, it} from '@jest/globals';
import {morseTranslate, wordTranslate, translator} from "./main" 

it("should translate a to .-",()=>{
   const result = translator("a");
   expect(result).toBe(".-")
})
it("should translate a to -...",()=>{
   const result = translator("b");
   expect(result).toBe("-...")
})
it("should translate ab to .- -...",()=>{
   const result = translator("ab");
   expect(result).toBe(".- -...")
})
it("should translate a b to .- -...",()=>{
   const result = translator("a b");
   expect(result).toBe(".- / -...")
})

// it("should take a string and place each letter into an array",()=>{
//    const result = createArr("hello");
//    expect(result).toStrictEqual(["h","e","l","l","o"])
// })

it("should take a string, place each letter into an array, and then translate each letter",()=>{
   const result = translator("sos");
   expect(result).toBe("... --- ...");
})
it("should take morse and return a string",()=>{
   const result = translator(".-");
   expect(result).toBe("a");
})
it("should take a morse word and return a string, including spaces between words",()=>{
   const result = translator(".... .. / - .... . .-. .");
   expect(result).toBe("hi there");
})


