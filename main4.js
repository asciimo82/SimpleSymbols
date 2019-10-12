function SimpleSymbols(str) { 

	//its a new line
  const letters = "abcdefghijklmnopqrstuvwxyz";

  if (str.length < 1 || str[0] != "+") {
  		alert("Input can not be empty!");
  		return false;
  	} 

  for (var i = 0; i < str.length; i++) {
  	if (letters.includes(str[i])){
  		if ((str[i-1] != "+") || (str[i+1] != "+")){
  			return false;
  		}
  	} 
  	else {
		continue;  		
  	}
  }

  // code goes here  
  return true; 

}
   
// keep this function call here 
console.log(SimpleSymbols("+d+=3=+s+"));