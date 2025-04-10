// false values => 0,"",false,-0,NaN,undefind,null,bigint(0)

//truthy values => 1,"0",true,[],{},function(){},Infinity,-Infinity 

let val1 = 10 ?? 20;
console.log(val1); // 10

let val2 = null ?? "" ?? 33;
console.log(val2);

let val3 = 11>11 ? 22 : 33-13-3;
console.log(val3);

