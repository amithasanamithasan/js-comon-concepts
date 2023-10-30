// always use ===
// equal comparison doesnt work for non-primitive

const first1 = [45, 54, 98];
const second1= [45, 54, 98];
if(first1 === second1){
    console.log('values are equal')
}
else{
    console.log('values are not equal');
}
// output-> values are not equal


const first2 = 2;
const second2 =2;
if(first2 === second2){
    console.log('values are equal')
}
else{
    console.log('values are not equal');
 }
// Output---> values are equal


const first3 = 2;
const second3 =2;
if(first3 == second3){
    console.log('values are equal')
}
else{
    console.log('values are not equal');
 }
//  output--->values are equal


// importance solution 
const first4=1;
const second4=true;
if(first4==second4){
    console.log('both are equal');

}else{
    console.log('both are not equal');
}
// output--> both are equal


const first5=1;
const second5=true;
if(first5===second5){
    console.log('both are equal');

}else{
    console.log('both are not equal');
}
// output--> both are not equal

const first6=0;
const second6=false;
if(first6==second6){
    console.log('both are equal');

}else{
    console.log('both are not equal');
}
// output--> both are equal
// type coercion
// type conversion
// type casting

