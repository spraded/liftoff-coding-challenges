function FirstReverse(str) { 
    let array = str.split("")
    let reversedArr = array.reverse();
    str = reversedArr.join("");
    // code goes here  
    return str; 
  
  }
     
  // keep this function call here 
  console.log(FirstReverse(readline()));