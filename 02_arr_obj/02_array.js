const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // u have to give 3 dots 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
//flat — it removes inner array brackets and brings all elements into a single array.
//flat(Infinity) means:Keep flattening all levels of nested arrays — no matter how deep they go.
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))  // if it is not found it return false
console.log(Array.from("Rohit"))  // it conver rohit into the array




let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));