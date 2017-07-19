console.log("Hello, world!")
// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"]
console.log()
// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {

var line = ""; 

for (var i = 0; i < sentence.length; i++) { 
	line = line + sentence[i] + " ";
	if ((i + 1) % 3 === 0) 
	{
		line += "!"
	}

 console.log(line);	




  
}
   }


// Invoke the function and pass in the array
addExcitement(sentence)