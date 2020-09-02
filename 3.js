const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter the Name `, (n) => {
 
   function reverseString(str){ 
    let revstr = ""; 
    for(let i = str.length-1; i>=0; i--){ 
        revstr = revstr+ str[i]; 
    } 
    return revstr; 
} 
var name=reverseString(n); 

var fs = require('fs');
var outfile = "NameStatus.txt";

 
fs.writeFileSync(outfile, name);


  readline.close()
})