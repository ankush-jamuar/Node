const myPromise = new Promise((resolved, rejected)=>{
    const success = false;
    if(success){
        resolved("Task completed successfully");
    } else{
        rejected("Task failed");
    }
});
myPromise.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});