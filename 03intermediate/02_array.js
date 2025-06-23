const marvel_heroes=["Thor","IronMan","SpiderMan"]
const dc_heroes=["SuperMan","Batman","Flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// const all_heroes=marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

const all_heroes=[...marvel_heroes, ...dc_heroes]
console.log(all_heroes);

const a1=[1,[1,2,3],6,[1,[2,3,4]]]
const a2=a1.flat(Infinity)
console.log(a2);

console.log(Array.isArray("Ritesh"));
console.log(Array.from("Ritesh"));
console.log(Array.from({name: "Ritesh"}));

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3 ));


