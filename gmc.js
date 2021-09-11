function findOutlier(integers) {
    function par(i) { return i & 1; }
  
    let parity = par(integers[0]);
    if (parity != par(integers[1])) {
      if (parity == par(integers[2]))
        // [0] and [2] are the true parity so [1] is the outlier
        return integers[1];
  
      // [1] and [2] are the true parity so [0] is the outlier
      return integers[0];
    }
    return integers.find((i) => par(i) != parity);
}

function likes(names) {
    if(names.length === 0){return 'no one likes this'}
    if(names.length === 1){return `${names} likes this`};
    if(names.length === 2){return names.join( " and ") + ' like this'}
    if(names.length === 3){return names.splice(0,names.length - 1).join(", ") + ' and ' + names[names.length -1] + ' like this'}
    return names.splice(0,2).join(", ") + ` and ${names.length} others like this`
}

function digital_root(n) {
    return (n - 1) % 9 + 1;
}

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      let ashol = []
      let cc = 0
      for(let i=0;i<=count;i++){
        ashol.push(`${i}`)
        cc += i
      }
      return (count === 0) ? "0=0" : (count < 0) ? `${count}<0` : ashol.join('+') + " = " + cc
  
    };
  
    return SequenceSum;
  
  })();

  function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number;counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }

  function doubleChar(str) {
    let asus = ""
    for(let i=0;i<str.length;i++){
      asus += `${str[i]}${str[i]}`
    }
    return asus
  }

  var countSheep = function (num){
    let i = 1
    let hmmm = ""
    while(i <= num){
      hmmm += `${i} sheep...`
      i++
    }
    return hmmm
  }

  function smash (words) {
    return words.join(" ");
};

function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': result = value.a + value.b;
        break 
      case'-': result = value.a - value.b;
        break
      case'/': result = value.a / value.b;
        break
      case'*': result = value.a * value.b;
        break
      case'%': result = value.a % value.b;
        break
      case'^': result = Math.pow(value.a, value.b);
    }
    return result;
  }

  function peopleWithAgeDrink(old) {
    return (old < 14)?"drink toddy":(old < 18)?"drink coke":
    (old <= 20) ? "drink beer" : "drink whisky"
  };

  function leo(oscar){
    return (oscar === 88) ?  "Leo finally won the oscar! Leo is happy" :
           (oscar === 86) ? "Not even for Wolf of wallstreet?!":
           (oscar < 88 && oscar !== 86) ? "When will you give Leo an Oscar?": "Leo got one already!"
    
  }
  function plural(n) {
    return (n === 1) ? false : true
  }

  var capitals = function (word) {
    let myArr = [];
    word.split("").forEach(element => {
        (element === element.toUpperCase()) ? myArr.push( word.split("").indexOf(element) ): 0
    });
    return myArr
  };

  function areYouPlayingBanjo(name) {
    return (name[0].toLowerCase() !== "r") ? name + " " + "does not play banjo" : name + " " + "plays banjo";
  }

  function monkeyCount(n) {
    let a = []
    for(let i=1;i<=n;i++){
      a.push(i)
    }
    return a
  }

  let greet = ()=>{return "hello world!"}


  function greet(name){
    if(name === "Johnny"){
          return "Hello, my love!";
    }
  
  return "Hello, " + name + "!";

}

var summation = function (num) {
    let assah = 0
    for(let i=1;i<=num;i++){
      assah += i
    }
    return assah
  }


  class Dinglemouse{

    constructor( firstName, lastName ){
        this.firstName = firstName
        this.lastName = lastName
    }
    
    getFullName(){
      return (this.firstName === "") ? this.lastName : (this.lastName === "") ? this.firstName : this.firstName+" "+this.lastName
    }
    
}


questions.map(x => x.usersAnswer = null)

Dog.prototype.bark = () =>{
    return "Woof!"
}

class Ball {
    constructor(ballType){
        this.ballType = (ballType === undefined) ? "regular" : ballType
    }
}

function arithmetic(a, b, operator){
    let opp = {
      add: a + b,
      subtract: a - b,
      multiply: a * b,
      divide: a / b
    }
    const {add,subtract,multiply,divide} = opp;
    
    return (operator === "add") ? add : (operator === "subtract") ? subtract :
    (operator === "multiply") ? multiply : (operator === "divide") ? divide : 0
  }

  function digitize(n) {
    let a = []
    for(let i=n.toString().length -1 ;i>=0;i--){
      a.push(parseInt(n.toString()[i]))
    }
    return a
  }

  function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
  }

  const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2);
  
  };


  function countSheeps(arrayOfSheep) {
    let ok = 0
    arrayOfSheep.map(x => (x === true) ? ok += 1 : 0)
    return ok
  }

  function DNAtoRNA(dna) {
    return dna.split("").map(x => (x === "T") ? x = "U" : x).join("")
  }

  function abbrevName(name){
    return name.split(" ")[0][0].toUpperCase() + "." + name.split(" ")[1][0].toUpperCase()
  }

  function bonusTime(salary, bonus) {
    return (bonus === true) ? "£" + salary * 10 : "£"+salary
}

function solution(str, ending){
    return (ending === str.split("").splice(ending.length * -1).join("") || ending === "") ? true : false
  }

  function solution(str){
    let ok = ""
    for(let i=str.length -1;i>=0;i--){ok += str[i]}
    return ok
  }

  function maps(x){
    return x.map(m =>{return m * 2})
  }

  function century(year) {
    let well = year / 100
    return (well.toString().split("").includes(".") === true) ? Math.trunc(well += 1) : well ;
}

function litres(time) {
    return Math.trunc(time * 0.5);
  }

  function basicOp(operation, value1, value2){
    return (operation === "+") ? value1 + value2 : (operation === "-") ? value1 - value2 : (operation === "*") ? value1 * value2 : value1 / value2
  }

  function numberToString(num) {
    return num.toString()
  }

  function boolToWord( bool ){
    return (bool === true) ? "Yes" : "No"
  }

  function noSpace(x){
    let smsm = []
    x.split("").map(lol =>{
      (lol !== " ") ? smsm.push(lol):0
    })
    return smsm.join("")
}

function removeChar(str){
    return str.split("").splice(1,(str.length -2)).join("")
};

function makeNegative(num) {
    return (num > 0) ? num * -1 : num
  }

  function isTriangle(a,b,c)
{
   return a+b>c && a+c>b && c+b>a;
}

function isTriangle(a,b,c)
{
  var ok = a+b > c
  var doki = a+c > b
  var hoki = b+c > a
  
  return ok && doki && hoki
}

function divisors(integer) {
    let dada = []
    for(let i=2;i<integer;i++){
        if(integer % i === 0){dada.push(i)}
    }
    return (dada.length === 0) ? integer + " is prime" : dada
};

function length(n) {
    let ko = 1;
    let ra = 2
    let ri = 0
    for(let i=0;i<n - 1;i++){
        ko += ra
        ra += 2
        ri += 1
    }
    return ko
}

function rowSumOddNumbers(n){
    let oooops = []
    let raa = length(n)

    for(let i=0;i<n;i++){
        oooops.push(raa)
        raa += 2
    }
    return oooops.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function maskify(cc) {
    return (cc.length >= 4) ? "#".repeat((cc.length) - 4) + cc.split("").splice(-4).join('') : cc.split("").splice(-4).join('') 
  }

  function findNextSquare(sq) { 
    return ((Math.sqrt(sq).toString()).includes('.')) ? -1 : (Math.sqrt(sq)+1) ** 2;
}

function findShort(s){
    var len = []
    s.split(" ").map(x => {
        len.push(x.length)
    })
    return Math.min(...len)
}

function squareDigits(num){
    let ror = ""
    num.toString().split("").map((x,i)=>{
      ror += x**2
    });
    
    return parseInt(ror)
  }

  function XO(str) {
    let xs = 0
    let os = 0
    str.split('').map(x=>{
      (x === 'x' || x === 'X') ? xs += 1 : (x === 'O' || x === 'o') ? os += 1 : 0 
    })
   
   return xs === os
   
 }


 function highAndLow(numbers){
    let ok = numbers.split(" ")

    let H = Math.max(...ok)
    let L = Math.min(...ok)


    return `${H} ${L}`
}

function highAndLow(numbers){
    let ok = numbers.split(" ")

    let H = Math.max(...ok)
    let L = Math.min(...ok)


    return `${H} ${L}`
}

function repeatt(n,x,it){
    for(let i=0;i<n;i++){
        x.push(it)
    }
}

function accum(s) {
    let ok = []
    let arr = s.split("");
    arr.forEach(element => {
        ok.push([element.toUpperCase()])    
    });
    let waa = []
    for(let i=0;i<s.length;i++){
        repeatt(i,ok[i],ok[i][0].toLowerCase())
    }
    let a = []
    let well = ok.join("-")
    for(let i=0;i<well.length;i++){
        (well[i] !== ',') ? a.push(well[i]) : 0
    }
    return a.join("")
}

function repeatt(n,x,it){
    for(let i=0;i<n;i++){
        x.push(it)
    }
}

function accum(s) {
    let ok = []
    let arr = s.split("");
    arr.forEach(element => {
        ok.push([element.toUpperCase()])    
    });
    let waa = []
    for(let i=0;i<s.length;i++){
        repeatt(i,ok[i],ok[i][0].toLowerCase())
    }
    let a = []
    let well = ok.join("-")
    for(let i=0;i<well.length;i++){
        (well[i] !== ',') ? a.push(well[i]) : 0
    }
    return a.join("")
}


function repeatt(n,x,it){
    for(let i=0;i<n;i++){
        x.push(it)
    }
}

function accum(s) {
    let ok = []
    let arr = s.split("");
    arr.forEach(element => {
        ok.push([element.toUpperCase()])    
    });
    let waa = []
    for(let i=0;i<s.length;i++){
        repeatt(i,ok[i],ok[i][0].toLowerCase())
    }
    let a = []
    let well = ok.join("-")
    for(let i=0;i<well.length;i++){
        (well[i] !== ',') ? a.push(well[i]) : 0
    }
    return a.join("")
}

function even_or_odd(number) {
    return (number % 2 === 0) ? "Even" : "Odd"
  }

  function getCount(str) {
    var vowelsCount = 0;
    str.split("").map((xelot) => {
      (xelot === "a" || xelot === "e" || xelot === "i" || xelot === "o" || xelot === "u") ? vowelsCount += 1 : 0
    })
    return vowelsCount;
  }

  function humanReadable(seconds) {
    let H = Math.trunc(seconds / 3600)
    let M = Math.trunc(seconds / 60) % 60
    let S = Math.trunc(seconds % 3600) % 60
  
    if (H   < 10) {H   = "0"+H;}
    if (M < 10) {M = "0"+M;}
    if (S < 10) {S = "0"+S;}
  
    return (`${H}:${M}:${S}`)
  }

  function humanReadable(seconds) {
    let H = Math.trunc(seconds / 3600)
    let M = Math.trunc(seconds / 60) % 60
    let S = Math.trunc(seconds % 3600) % 60
    
    if (H   < 10) {H   = "0"+H;}
    if (M < 10) {M = "0"+M;}
    if (S < 10) {S = "0"+S;}
  
    return (`${H}:${M}:${S}`)
  }

  function multiply(a, b){
    return a * b 
  
  }

  function multiply(a, b){
    return a * b
  }

  function solution(string) {
    let well = ""
    for(let i=0;i<string.length;i++){(string[i] === string[i].toUpperCase()) ? well += ` ${string[i]}` :  well += string[i]}
    return well
    
}

function infected(s) {
    const total = s.split("X")
    let all = 0
    let infected = 0
    let ok = total.map((x)=>{
      all += x.length
      const well = (x.includes(1) === true) ? infected += x.length : 0
    })
   return (all === 0 && infected === 0) ? 0 : (infected * 100) / all
}

function polybius (text) {
    // Morse code vocab :stuck_out_tongue: ----------------------------------------------------- 
    const myArr = text.split("");
    let word = "";
    const meterpreter = myArr.map((letter)=>{

        // Morse code vocab :stuck_out_tongue: ----------------------------------------------------- 
        const comparison =
        (letter === "A") ? word += "11" :
        (letter === "B") ? word += "12" :
        (letter === "C") ? word += "13" :
        (letter === "D") ? word += "14" :
        (letter === "E") ? word += "15" :
        (letter === "F") ? word += "21" :
        (letter === "G") ? word += "22" :
        (letter === "H") ? word += "23" :
        (letter === "I") ? word += "24" :
        (letter === "J") ? word += "24" :
        (letter === "K") ? word += "25" :
        (letter === "L") ? word += "31" :
        (letter === "M") ? word += "32" :
        (letter === "N") ? word += "33" :
        (letter === "O") ? word += "34" :
        (letter === "P") ? word += "35" :
        (letter === "Q") ? word += "41" :
        (letter === "R") ? word += "42" :
        (letter === "S") ? word += "43" :
        (letter === "T") ? word += "44" :
        (letter === "U") ? word += "45" :
        (letter === "V") ? word += "51" :
        (letter === "W") ? word += "52" :
        (letter === "X") ? word += "53" :
        (letter === "Y") ? word += "54" :
        (letter === "Z") ? word += "55" :
        (letter === " ") ? word += " " : word = "ERROR !! This is not Polybius code :=)"

    });

    return word
}

function ensureQuestion(s) {
    return (s[s.length -1] !== "?")? s += "?":s
  }

  function feast(beast, dish) {
    return (beast[0] === dish[0] && beast[beast.length -1] === dish[dish.length -1 ])
  }

  function pyramid (n) {
    var result = [];
    
    for (var i = 0; i < n; i++) {
      var line = [];

      
      for (var j = 0; j < i + 1; j++) {
        line.push(1)
      }
      
      result.push(line);
    }
    
    return result;
  }


  function pyramid(n) {
    var result = [];
    
    for (var i = 0; i < n; i++) {
      var line = [];

      
      for (var j = 0; j < i + 1; j++) {
        line.push(1)
      }
      
      result.push(line);
    }
    
    return result;
}

function reverseWords(str){
    const ok = str.split(" ");
    let raw = ""
    for(let i=ok.length-1;i>=0;i--){
        if(i > 0){
            raw += ok[i] + " "
        }
        else{
            raw += ok[i]
        }
    }
    return raw
  }

  function killcount(counselors, jason){
    let as = []
    for(let i=0;i<counselors.length;i++){
        if(counselors[i][1] < jason){
            as.push(counselors[i][0])
        }
    }
    return as
}


function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x))
}

function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }

  function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }

  function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }

  function getMiddle(s)
  {
      var ood = Math.floor(s.length -1 ) / 2
      var even = s.length / 2 
      var so = (s.length % 2 === 0) ? `${s[even -1]}${s[even]}` : s[ood]
      return so
  }
  
  var isSquare = function(n){
  
    return Math.sqrt(n) % 1 === 0;

}

console.log(isSquare(0))