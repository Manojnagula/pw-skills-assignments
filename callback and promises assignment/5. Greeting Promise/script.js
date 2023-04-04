function greet(name){
    return new Promise((resolve,reject)=>{
        if (typeof name != 'string'){
            reject(new Error('Name must be a string'));
        }else{
            resolve(`Hello,${name}!`);
        }
    });
}

greet('Manoj')
.then(greeting => console.log(greeting))
.catch(error => console.log(error.message));