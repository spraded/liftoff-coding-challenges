function charCount(myChar, str) {
    arr = str.split("");
    result = [];
    for(let i = 0; i < arr.length; i++){
      if (arr[i] === myChar){
        result.push(arr[i]);
      }
    }
    return result.length;
  }
