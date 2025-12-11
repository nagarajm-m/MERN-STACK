console.log("1"+2)
console.log("20"-5)
console.log("30"*2)
console.log(Boolean(0));
console.log(Boolean(1));
if(1){
    console.log("bye");
}
console.log(10=="10")
console.log(0==false)
console.log(30==="30")
let age =30;
age=35;
console.log(age)









var age1= 26;
var age1=27;
age1=28;
console.log(age1)



function example(){
    if(1){
        var count=10;

    }
    console.log(count);
}

example();




let fr=[1,2,3,4,5,6,7,8]
let found = fr.find(num=>num>10);
let even=fr.filter(num=>num%2!=0);
console.log(found);
console.log(even);


const f =['app','le'];
const newlength=f.unshift('ooo');
console.log(f);
console.log(newlength);
const nee=f.shift();
console.log(nee)








let nums=[1,2,3,4,5]
let double =nums.map(n=>n*2);
console.log(nums);
console.log(double);


let p=[200,300];
let fo=p.map(n=>n+100);
console.log(p);
console.log(fo);


let employees=[
    {name:"palli",age:"26",grade:"A"},
    {name:"ram",age:"27",grade:"B"},
    {name:"sham",age:"28",grade:"C"},
];

employees.forEach(st=> console.log(st.name)

);

const students = [
  { name: "Arun", marks: 85 },
  { name: "Meena", marks: 92 },
  { name: "Karthik", marks: 74 }
];
const names = students.map(student => student.name);
console.log(names);



const person={
    name:"dev",
    age:30,
    city:"chennai"
};
for(let key in person){
    console.log(key,person[key]);
}


let fruits =["apple","banana","grape"];
for(let f in fruits){
    console.log(f);
}


let namess =["hari","gopi","ravi"];

namess.forEach(n=> {
    console.log("hello"+n);
});

let number =[10,30,50]
    let total =nums.reduce((sum,current)=>sum+current,0);
    console.log(total);
















