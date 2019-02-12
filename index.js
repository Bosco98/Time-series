/* Finding linear regression in javascript */

//question values
const x = [1,2,3,4,5]
const y = [0,0,0,1,5]

//Σx, Σx2, Σy, Σxy = 0
var sumx=0,sumy=0,sumxy=0,sumxsq =0;
const n = x.length;
var a ,b = 0;

for(q = 0; q<n;q++){
    sumx = sumx+ x[q];
    sumy += y[q];
    sumxy += x[q]*y[q]; 
    sumxsq += x[q]*x[q];
}
console.log("The value of x:")
console.log(x);
console.log("The value of x:")
console.log(y);
console.log("Σx = "+sumx);
console.log("Σy = "+sumy);
console.log("Σx2 = "+sumxsq);
console.log("Σxy = "+sumxy);

//Finding a and b for y = a + bx.
a = ((sumy*sumxsq)-(sumx*sumxy))/((n*sumxsq)-(sumx*sumx));
b = ((sumxy*n)-(sumx*sumy))/((n*sumxsq)-(sumx*sumx));

console.log(b);
console.log(b);

// To find the next value from the trend. Change var x 
var xx = 6;
var yy = 0;

console.log("y = a + bx");
console.log("y" + "="+ a +"+" +b+" * "+xx);
yy = a + b * xx;
console.log("Next value = "+ xx);
console.log("Expected value = "+ yy);