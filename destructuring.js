//object destructuring
let user={
    id:10,
    name:'mahfuz alam',
    age:25,
    country:'Bangladesh'
};

const {name}=user;
//console.log(name);
let user2={
    id:10,
    name:'Ahmed Hridoy',
    age:24,
    country:'Bangladesh',
    education:{
        degree:'Hons',
        institution:'Dhaka University'
    },
};

const {education:{degree}={}}=user2;
//console.log(degree);

//Array destructuring
let numbers=[1,2,3,4,5,6,7,8,9,10];
let [a,b]=numbers;
const [,,,,c,,,,d]=numbers;

//console.log(a,b);
//console.log(c,d);
//value exchange

var m=10;
var n=15;
 [n,m]=[m,n];
console.log(m,n);
