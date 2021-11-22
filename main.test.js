// need to test for each letter
import {expect, it} from '@jest/globals';
import {translate, reverseTranslate} from "./main" 

it("should translate a to .-",()=>{
   const result = translate("a");
   expect(result).toBe(".-")
})
it("should translate a to -...",()=>{
   const result = translate("b");
   expect(result).toBe("-...")
})
it("should translate ab to .--...",()=>{
   const result = translate("ab");
   expect(result).toBe(".--...")
})
it("should translate a b to .- -...",()=>{
   const result = translate("a b");
   expect(result).toBe(".- -...")
})

// it("should take a string and place each letter into an array",()=>{
//    const result = createArr("hello");
//    expect(result).toStrictEqual(["h","e","l","l","o"])
// })

it("should take a string, place each letter into an array, and then translate each letter",()=>{
   const result = translate("sos");
   expect(result).toBe("...---...");
})
it("should take morse and return a string",()=>{
   const result = translate(".-");
   expect(result).toBe("a");
})
it("should take a morse word and return a string, including spaces between words",()=>{
   const result = translate(".... .. / - .... . .-. .");
   expect(result).toBe("hi there");
})


