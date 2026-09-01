let result = "";
let somme = 0;


for (let i = 10 ; i > 0; i--)
{
result += i + " " ;
}

console.log(result);

console.log("Decollage !");

for (let i =0  ; i <= 100 ; i++)
{
somme+= i ;
}

console.log(`somme de 1 a 100 :  ${somme}`);

let list = "";
for(let i = 1 ; i<=20 ; i++)
{
 if(i%2==0)
 {
  list += i + " ";
 }
}
console.log(`nombres pairs : ${list}`);

