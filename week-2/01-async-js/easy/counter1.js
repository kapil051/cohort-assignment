
       let a=0;
 
    function fun(){
        console.log(a);
          a++;
    }

        for(let i=0;i<10;i++){
            setTimeout(fun,5000);
                console.log(i);
        }

      