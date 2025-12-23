let height = undefined;
let result;
const nullishCoalescing = (height) =>{
   return result = height ?? 'Height is not defined'
}

nullishCoalescing()
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
