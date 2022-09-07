// Promises example
const helloPromise = () => {
    return new Promise((resolve, reject) => {
       if (false) {
        resolve('Hey!');
        } else {
           reject('Ups!!!');
        }
       });
    }
   
   helloPromise()
       .then( response => console.log(response))
       .then(() => console.log('hola'))
       .catch(error => console.log(error));
   