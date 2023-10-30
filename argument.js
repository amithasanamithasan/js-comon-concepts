// array like object


function sum(a, b, c){
    const args = [...arguments];
    // console.log(args);
    // output--->[ 45, 89, 12, 45, 98, 56 ]
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
//  console.log(total);
//  output --> 146
console.log(sum.length);   
// sum.length mane tumi koita paramiter use korco jahtu amra a,b,c 3 ta pramiter use korci tie 
// output---> 3 dekhice 