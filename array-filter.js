let numbers=[1,2,3,4,5,6,7,8,9,10];
let result=numbers.filter((num,index,arr)=>{
    // console.log(index)
    // console.log(arr)
    return num>5;
})
console.log("Original Array: ",numbers)
console.log("New Array: ",result)