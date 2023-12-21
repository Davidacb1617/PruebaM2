'use strict'
let ages = [15, 50, 45];
ages.splice(1,0,18);
for(let i=0; i < ages.length; i++){
    if(ages[i] > 25){
    }else{
        alert(ages[i]);
    }
}