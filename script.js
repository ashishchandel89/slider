
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



//     Que=1;
// let User=Number(prompt("Enter your age: "));
// if(User>=18){
//     console.log("You are eligible for vote");
// }
// else{
//     console.log("You are not eligible for vote");
// }



//         Que=2;
//     let table=Number(prompt("Enter a no to print its table: "));
//     for(let i=1;i<=10;i++){
//         console.log(table + " * " +i+" = "+(table*i));
//     }



    // Que=3;
    //  let greater=0;
    // for(let i=1;i<=15;i++){
    //    if(i>=8){
    //     greater++;
    //     console.log(i);
    //    }
    // }
    // console.log("Greater than 8: "+greater);



    //Que=4;
    // let password="Ashish@2006";
    // let user=prompt("Enter your password: ");
    // if(user===password){
    //     alert("Login successful");
    // }
    // else{
    //     alert("Login failed. Please try again.");
    // }



    // Que=5;
    // let enter_password=prompt("Enter new password: ");
    // for(let i=0;i<=3;i++){
    // let confirm_password=prompt("Confirm your password: ");
    // if(enter_password===confirm_password){
    //     alert("Password matched successfully");
    //     break;
    // }
    // else if(enter_password!==confirm_password){
    //     alert("Password did not match. Please try again.");
    // }
    //     if(i===2){
    //        alert("Password did not match. You have only one last attempt.");
    //     }
    //     if(i===3){{
    //         alert("Sorry, Password did not match. You have no more attempts left.");
    //         break;
    //     }
    // }
    // }
    


    //Que=6;
    //     let count=0;
    //     while(true){
    //     let user=prompt("Enter YES to continue or STOP to exit: "); 
    //     if(user.toUpperCase()==="YES"){
    //      count++;
    //     }
    //     else if(user.toUpperCase()==="STOP"){
    //     break;
    //     }
    //     }
    //  console.log("You entered YES "+count+" times.");



    //Que=7;
    // let count=0;
    // for(let i=1;i<=50;i++){
    //     if(i%7==0){
    //         console.log(i);
    //         count++;
    //     }
    // }
    // console.log("Total count of numbers divisible by 7 between 1 and 50: "+count);



    //Que=8;
    // let sum=0;
    // for(let i=1;i<=30;i++){
    //     if(i%2==1){
    //         console.log(i);
    //         sum=sum+i;
    //     }
    // }

    // console.log("Sum of odd numbers between 1 and 30: "+sum);




    //Que=9;
    // while(true){
    //     let user=Number(prompt("Enter a no: "));
    //     if(user%2===0){
    //         break;
    //     }
    // }



    //Que=10;
//     let start=Number(prompt("Enter a starting no: "));
//     let end=Number(prompt("Enter an ending no: "));
//     if(start<=end){
//     for(let i=start;i<=end;i++){
//         console.log(i);
//     }
// }
// else{
//     console.log("Invalid input. Starting number should be less than or equal to ending number.");
// }



    //Que=11;

//     let count=0;
//     let start=Number(prompt("Enter a starting no: "));
//     let end=Number(prompt("Enter an ending no: "));
//     if(start<=end){
//      for(let i=start;i<=end;i++){
//         if(i%2===1){
//             console.log(i);
//             count++;
//             if(count===3){
//                 break;
//             }
//         }
        
//     }
// }
    


    //Que=12;
    // let p_count=0;
    // let n_count=0;
    // for(let i=0;i<5;i++){
    //     let user=Number(prompt("Enter a no: "));
    //     if(user>=0){
    //         p_count++;
    //     }
    //     else if(user<0){
    //         n_count++;
    //     }
    // }
    // console.log("Total positive numbers entered: "+p_count);
    // console.log("Total negative numbers entered: "+n_count);


    //Que=13;
//     let totalAmount = 1000;
//     let count = 3;
//     while (totalAmount > 0) {
//     let input = prompt("Enter the amount to withdraw:");
//     if (input === null) {
//         console.log("Withdrawal cancelled.");
//         break;
//     }
//     let withdraw = Number(input);
//     if (isNaN(withdraw) || withdraw <= 0) {
//         console.log("Invalid input. Please enter a valid amount.");
//         continue;
//     }
//     if (withdraw > totalAmount) {
//         console.log("Insufficient balance. Please enter a valid amount.");
//         continue;
//     }
//     totalAmount -= withdraw;
//     console.log("Remaining amount: " + totalAmount);
//     count--;
//     if (count === 0) {
//         console.log("You have no more attempts left.");
//         break;
//     }
// }

    
    
    

  
    //Que=14;

    // let attempts=3;
    // let password="Ashish@2006";
    // while(attempts>0){
    //     let user=prompt("Enter your password: ");
    //     if(user===null){
    //         console.log("Login cancelled.");
    //     }else{
    //     attempts--;
    //     if(user===password){
    //         console.log("Login successful.");
    //         break;
    //     }
    //     else if(attempts===0){
    //         console.log("Incorrect password. You have no more attempts left. Login failed.");
    //     }
    //     else {
    //         console.log("Incorrect password. You have "+attempts+" attempts left.");
    //     }
    // }
        
    // }
    
    
   
        // function sum(...num){
        //     console.log(num);
        // }
        // sum(1,2,3,4,5,6,7,8,9,10);

        function abcd(a,b,c,d=10){
            console.log(a+b+c+d);   
        }
        abcd(2,3,4);