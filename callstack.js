var add = (a, b) => {
    return a + b
}


var res = add(2,4);

console.log(res);

setTimeout(()=>{
    console.log("Data added after 2 sec")
}, 2000);

setTimeout(()=>{
    console.log("Second Timeout")
}, 0);

console.log("End")