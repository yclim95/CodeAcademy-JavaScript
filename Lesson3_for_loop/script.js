/*jshint multistr:true */

text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

var newArray=[];
if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}

for(var i=0; i<text.length; i++){
    if(text[i]==='E'){
        for(var j=i; j<(myName.length+i);j++){
            newArray.push(text[j]);
        }
    }
}

if(newArray.length===0){
    console.log("Your name wasn't found!");
}
else{
    console.log(newArray);
}