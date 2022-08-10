//Loops in Javascript

// 1. Initialization
// 2. conditions to stop the loop
// 3. increment decrement to move the loop next generation

//1.while loop

var i=1;
while(i<=10){
    console.log("This is javascript loop"+i);
    i++;
}

//2. dO WHILE LOOP :Iterate over the condition atleast once.

var j=1;
do
{
    console.log("This is javascript with Do while");
    j++;
}
while(j<1);


//for loop
for(var k=1;k<=10;k+=2) console.log("Odd "+k);

//FOR LOOP

var k=1;
for( ; ; ){
    if(k<10) break;
    console.log("Odd "+k);
    k+=2;
}


for(var p=1;p<=10;p++){
    if(p==7) break;
    console.log(p);
}
for(var p=1;p<=10;p++){
    if(p==7) continue;
    console.log(p);
}