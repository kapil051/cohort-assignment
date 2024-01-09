/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

      return new Promise((resolve)=>{

          let time=n*1000;

          setTimeout(()=>{
              resolve();
          },time);

      })

}

module.exports = wait;
