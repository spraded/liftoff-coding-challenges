function detectWord(str) {
	let arr = str.split("");
	let lowerCase = [];
	for (let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i].toLowerCase()){
            lowerCase.push(arr[i])
        }
    }
	let secretStr = lowerCase.join("");
	return secretStr;
}