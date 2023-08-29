const number = 15;

let ourPromise = new Promise ((resolve,reject) => {
    if(number > 10){
        resolve(number);
    }else{
        reject(number);
    }
})

ourPromise
    .then((num) => console.log(num))
    .catch((err) => console.error(err))