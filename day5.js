console.log("start")
setTimeout(()=>{
    console.log("inside timeout" );
    },3000)
console.log("end")


setTimeout(()=>{
    console.log("one");
setTimeout(()=>{
        console.log("two");
setTimeout(()=>{
            console.log("three");
        },5000);
    },2000);
},1000);


let ice =new Promise((resolve,reject)=>{
    let ice =true;
    if(ice ){
        resolve("ice ");
    }
    else{
        reject("no ice ");
    }
});

ice.then((value)=>{
    console.log(value);
})
ice
.catch((error)=>{
    console.log(error);
});