/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
    
        let obj =new Object();
          // console.log(obj);

              transactions.forEach(element => {

                    let cat=element.category;
                    let amount=element.price;

                     if(obj.hasOwnProperty('cat')){
                        obj["cat"]+=amount; 
                     }else{
                      obj["cat"]=amount;
                     }
                  
              });


              let ans=[];
            
            for (const key in obj) {
                 let val=obj[key];
                  ans.push({
                      key:val,
                  });  
            }

             return ans;
}


// calculateTotalSpentByCategory();


module.exports = calculateTotalSpentByCategory;
