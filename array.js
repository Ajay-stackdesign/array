let cars1 =["car","bike","scoter"];
let result1=""
for(let i in cars1){
    result1=result1+cars1[i]+" ";
  }
console.log(result1)

let A=[1,4,3,2];
A.reverse();
let result="";
for (let i=0;i<A.length;i++){
    result=result+A[i]+" ";
   
}
console.log(result)

//ceating an element
const cars = [];
cars[0]="harry";
cars[1]="code";
console.log(cars);

//accessing array elements
const honda=["saab","bmw","mercedy"];
console.log(honda[0])

//changing the element
honda[0] = "lamborghini";
console.log(honda)

//access the full array

let sum = "";
const mercedy = ["diesel","engines"]

for (let i=0;i<2;i++){
  sum=sum+mercedy[i]+"";
}
console.log(sum)

//arrays are objects
//sort property
const person=["yuvraj","sahani"]
let res =person.sort()
console.log(res)

//length property

let des=["product","machine"]
let rp = des.length;
console.log(rp)

//accessimg the firt element the array
const building = ["yashodeep","yash paradise"]
console.log(building[0])

//accessing the last Array element
const fruits = ["apple","banana","mango"];
let tt = fruits[fruits.length-3];
console.log(tt)

//looping array elements

const loop = ["ajay","sahani","vedant"];
for(i=0;i<=2;i++){
  console.log(loop[i]," ");
}

//array methods
//1)concat()
let number=[12,13,14];
let string =["ajay","sahani"];

let outp = string.concat(number)
for(let i=0;i<=4;i++){
  console.log(outp[i])
}

let ro = [2,12,13,14,15]
let df = ro.reverse();

let dp = df.length
let rt = dp.toString();
let tr =rt.length
  for (let i=0;i<=tr.length;i++){
  console.log([i]);
  }
console.log(df)
//console.log(re)
console.log(dp)
console.log(rt)
let rs = [2,12,13,14,15]
let ry = rs.toString()
console.log(ry)

//forEach looparray

const animals =[ "tiger","lions","cheetah"]

animals.forEach(function(key){
  console.log(key)
});

// push method arrays
let tiger = ["male","female","cubs"];
tiger.push("white");
console.log(tiger);

//pop method array
tiger.pop();
console.log(tiger)

//sort() method array
tiger.sort();
console.log(tiger)

//reverse array method.
tiger.reverse();
console.log(tiger);

//adding a element at last.
tiger[tiger.length]="white"
console.log(tiger)

//Array.isarray
let LL=["ajay","sahani","geeta"];
var y=Array.isArray(LL)
console.log(y)

//convert to toString

let yy = ["ajay","shani"];
yy.toString();
//yy.push("geeta")
console.log(yy)

//converts to join() method:

let jj = ["ajay","sahani"];
let bj= jj.join("*")
console.log(bj)

//shift () method:

let kk =["ajay","sahani"]
 kk.shift();
console.log(kk);

//unshift();
kj = ["ajay","sahani"]
kj.unshift("sahani");
console.log(kj)
// changing the elements:
kt = ["ajay","sahani"]
kt[0]="geeta";
console.log(kt)

// the length property provides an easy way to append a new element to an array
key = ["ajay","sahani"]
key[key.length]="lemon";
console.log(key)

//deleting an array
let kl=["ajay","sahsni"]
delete kl[1];
console.log(kl)

//splice() method:
let og = ["ajay","sahani","geeta"]
og.splice(2,0,"geeta","sahani")
console.log(og)

og.splice(2,2,"orange","lemon")
console.log(og)
 
//to remove the elemnet using splice method
og.splice(0,1)
console.log(og)

//merging two arrays

let ar = ["ajay","sahani"]
let a = ["geeta"]
let arr =[ "sahani"]
let array1 = ar.concat(a,arr)
console.log(array1)

//slice() method
let ku = ["ajay","sahani","geeta","shanai"]
const yh =ku.slice(0,3)
console.log(yh)







