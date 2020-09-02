const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter the Number`, (num) => {
  
var fs = require('fs');
var outfile = "primesNumber.txt";

var count = 0;
var maxCount = num;
var primes = [];

var i = 2;

while(count<maxCount) {
    if( isPrime(i) ) {
        primes.push(i);
        count++;
    }
    i++;
}

function isPrime (n)
{
    if ( n%1 || n<2 ) return false;

    var q = Math.sqrt(n);

    for (var i = 2; i <= q; i++)
    {
        if (n % i === 0)
        {
            return false;
        }
    }
    return true;
}

var result = primes.toString();

var out = result;
fs.writeFileSync(outfile, out);


  readline.close()
})

var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('./result.html',function(err,data){
        res.writeHead(200,{'content-Type':'text/html'})
        res.write(data);
        return res.end();
        


    })
}).listen(3900)


