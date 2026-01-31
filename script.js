
//Some Javascript Basics.

let a = Number(prompt("Enter a no:"));
console.log("Square of a: "+(a*a));
console.log("Cube of a: "+(a*a*a));
let fact=1;
for(let i=a;i>=1;i--){
    fact=fact*i;
}
console.log("Factorial of a: "+(fact));


console.table({Name: "Ashish", Email: "chandel078ashish@gmail.com", Phone: "8221876090"})

let s1="AshishChandel"
console.log(s1.split(''));
console.log(s1.replace("Chandel","Thakur"));
console.log(s1.slice(2,7));
console.log(s1.includes("d"));
console.error(s1+" may contain error");
console.warn( "Warning: This is not supported by this langauge");
console.info("Server started successfully");        // Not more differnce in info and log
console.group("User Information");              // Helps groups multiple logs together 
console.log(s1);
console.log("class: Btech 3rd yr");
console.groupEnd();

console.time("looptime");               // It display the timing of execution of loop
for(let i=a;i>=1;i--){
    fact=fact*i;
}
console.timeEnd("looptime");            // this is mandatory "looptime"
console.log("Factorial of a: "+(fact));
//console.clear();
let s2=`Ashish has got ${Math.round(7.9+7.3+7.43+9.04)/4} cgpa till four semester`;
console.log(s2);