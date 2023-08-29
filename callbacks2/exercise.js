function repeatHello(callback){
    let id = setInterval(()=> console.log("Hello"), 1000);
    setTimeout(()=> clearInterval(id), 5000);
   }
repeatHello()  
