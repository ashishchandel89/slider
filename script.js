
// //Some Javascript Basics.

// let a = Number(prompt("Enter a no:"));
// console.log("Square of a: "+(a*a));
// console.log("Cube of a: "+(a*a*a));
// let fact=1;
// for(let i=a;i>=1;i--){
//     fact=fact*i;
// }
// console.log("Factorial of a: "+(fact));


// console.table({Name: "Ashish", Email: "chandel078ashish@gmail.com", Phone: "8221876090"})

// let s1="AshishChandel"
// console.log(s1.split(''));
// console.log(s1.replace("Chandel","Thakur"));
// console.log(s1.slice(2,7));
// console.log(s1.includes("d"));
// console.error(s1+" may contain error");
// console.warn( "Warning: This is not supported by this langauge");
// console.info("Server started successfully");        // Not more differnce in info and log
// console.group("User Information");              // Helps groups multiple logs together 
// console.log(s1);
// console.log("class: Btech 3rd yr");
// console.groupEnd();

// console.time("looptime");               // It display the timing of execution of loop
// for(let i=a;i>=1;i--){
//     fact=fact*i;
// }
// console.timeEnd("looptime");            // this is mandatory "looptime"
// console.log("Factorial of a: "+(fact));
// //console.clear();
// let s2=`Ashish has got ${Math.round(7.9+7.3+7.43+9.04)/4} cgpa till four semester`;
// console.log(s2);



// console.log("Ashish"*2);            //NaN

// let arr1=[1,2,3,4];                 // Reference array
// let arr2=arr1;
// arr2.pop();
// console.log(arr1);

// console.log(1/0);
// console.log(-1/0);

// let isCodingfun=true;
// let isEqual=true;
// console.log(isCodingfun == isEqual);

// let name="Ritik";
// let s1="Hello";
// console.log(`Welcome ${name} `+s1);


// console.log("Connected Successfully")

// {
//     let a=12;
//     var b=13;
// }

// console.log(b);

// let name=prompt("Enter Your Name: ");
// alert(`Hello ${name}`);

// let age1=prompt("Enter your age: ");
// console.log(age1+'5');

// let num1=prompt("Enter a num1: ");
// let num2=prompt("Enter a num2: ");
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1%num2);
// console.log(num1**num2);


// let x=5;
// x=x+3;
// x+=3;
// x-=4;

// console.log(5=='5');
// console.log(5==='5');
// console.log(5 & 4);


// test();
// function test(){
//     let s1="hello";
//     console.log(`Say,"${s1}"`);
// }

// //Hoisted is known as declaration of any variable in var is hoisted. but in the concept of const and let after initialization a variable does not a hoisted

//  let age=prompt("Enter your age: ");
//  let country=prompt("Enter your country");
//  console.log(Number(age));
//  console.log(country);
//  age>=18 && country==='india' ? console.log("You are eligible for vote") : console.log("you are not eligible for vote")
// // age>=18 ? console.log("You are Eligible for vote.") : console.log("You are not eligible for vote");

// let city=prompt("Enter a city");
// city==='bhopal' ? console.log("Mp") : city==='delhi' ?  console.log("capital") : console.log("Unknown")

// let score=prompt("Enter your score to check you are pass or fail");
// score>=40 ? console.log("pass") : console.log("fail")

// let day=prompt("Enter a day");
// switch(day){
// case '1':
//     console.log("Sunday");
//      break;
// case '2':
//     console.log("Monday");
//      break;
// case '3':
//      console.log("Tuesday");
// break;

// default:
// console.log("Invalid");
// }
// let s1="hello ashish chandel how are you?";
// console.log(s1.split());

// let BigInt=Number(prompt("Enter a no: "));
// if(BigInt%2==0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }



// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         console.log(" *");
//     }
//     console.log();
// }


// for(let i=0;i<=10;i++){
//     console.log(i);
// }

    Que=1;
let User=prompt("Enter your age: ");
if(User>=18){
    console.log("You are eligible for vote");
}
else{
    console.log("You are not eligible for vote");
}

  