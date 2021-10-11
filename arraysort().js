
//compare function 
const points = [54,2,6,24]
points.sort(function(a,b){return a -b})
console.log(points)
//compare function
const wr = [32,-2,1]
wr.sort(function(a,b){return a-b})
console.log(wr)

// sorting an array in random order.

const animals=[12,65,45,-98]
animals.sort(function(a,b){return 0.5 - Math.random()});
console.log(animals)

//highest value. and lowest value by using sort method 

const z = [10,12,45]
z.sort(function(a,b){return a-b});
let ee = z[z.length-1]
console.log(ee)
console.log(z[0])

//sorting arrays object
const cars = [
    {type:"volvo" , year :2011},
    {type:"bmw" , year : 2019}
]

let bel=cars.sort(function(a,b){ return a.year-b.year})
console.log(bel)

//arrow function
let sum = (age,Name) => {console.log (`my name ${Name} and age is ${age}`)};
 
sum(12,"sahani");
//console.log(p)
