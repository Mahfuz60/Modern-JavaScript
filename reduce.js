let numbers=[1,2,3,4,5,6,7];
let sum=numbers.reduce((previousValue,currentValue)=>{
    return previousValue+currentValue;

},0);
console.log(sum);