//#1) prediction = 35, output = 35
function a() {
    return 35;
}
console.log(a())

//#2) prediction = 8  , output= 8 
function a() {
    return 4;
}
console.log(a() + a());

function a() {
    return 824;
}
console.log(a())

// #3) prediction= 6b  output =6
function a(b) {
    return b;
}
console.log(a(2) + a(4));

//#4) prediction= 9 output= 3,9
function a(b) {
    console.log(b);
    return b * 3;
}
console.log(a(3));

//#5) prediction= 4, 40 output= 40
function a(b) {
    return b * 4;
    console.log(b);
}
console.log(a(10));

//#6) prediction= 4,15 output= 4
function a(b) {
    if (b < 10) {
        return 2;
    }
    else {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

//#7)  prediction= [10,3,3,10] output= 10 3   30
function a(b, c) {
    return b * c;
}
console.log(10, 3);
console.log(a(3, 10));

//#8) prediction= 0,1,2,3,4,5,6,7,8,9,3,4 output= 3 4
function a(b) {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

//#9) prediction= 2 5 8 11  output= 2 5 8 11
function a() {
    for (var i = 0; i < 10; i++) {
        i = i + 2;
        console.log(i);
    }
}
a();

// #9) prediction= 0 0  output= 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0
function a(b, c) {
    for (var i = b; i < c; i++) {
        console.log(i);
    }
    return b * c;
}
a(0, 10);
console.log(a(0, 10));

// #10) prediction= 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9   output= nothing
function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(j);
        }
        console.log(i);
    }
}

//#12) prediction= 0 1 2 3 4 5 6 7 8 9 9 8 7 6 5 4 3 2 1  output= nothing
function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(i, j);
        }
        console.log(j, i);
    }
}

//#13) prediction= 10   output= 10
var z = 10;
function a() {
    var z = 15;
    console.log(z);
}
console.log(z);


//#14) prediction= 10 15   output= 15 10
var z = 10;
function a() {
    var z = 15;
    console.log(z);
}
a();
console.log(z);

//#15) prediction= 15 Z 10   output= 15 15
var z = 10;
function a() {
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
