//forEach()

/*const array = [12,13,14]
array.forEach(function(name,index){
    console.log(name,index)

});

//map iteration javascript
const arr = [1,2,3]
const r =arr.map(function(name){
    return name*2;
})
console.log(r)

//filter ieration
const a = [ 1,2,3];
const co = a.filter(function(name){
    return name%2==0;
})
console.log(co)

//reduce iteration
*/
const arra =[1,2,3];
let multiply = arra.reduce(function(a,b){
    return a+b;
},0);
console.log(multiply)

const arr = [1, 2, 3, 4, 5];

const sum = arr.map(function (value) {
    if (value%2==0){
        return value*10
    }else {
        return value*6;
    }
},0);

console.log('Array:', arr);
console.log('Sum:', sum);

//some()

/*const ee = [11,12,13];
const con = ee.some(function(name){
    return name<12;
});
console.log(con)

//every ()

const i = [1,1,1]
const ii = i.every (function(name){
    return name>1;
});
console.log(ii)

//*/



