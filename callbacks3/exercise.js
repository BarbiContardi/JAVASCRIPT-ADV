function repeatHello(callback){
    let id = setInterval(()=> console.log("Hello"), 1000);
    setTimeout(()=> clearInterval(id), 5000);
   }
repeatHello()  

//setTimeout y setInterval siempre toman 2 argumentos, 1 funcion de flecha(callback) 
//y el tiempo de retraso. 