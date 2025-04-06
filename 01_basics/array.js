let marvel_heros = ["thor","ironman","spiderman"]
let dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// let allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

let newHeros = [...marvel_heros,...dc_heros] 
console.log(newHeros);




