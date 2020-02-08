//1
function get1to255() {
    for (var i = 1; i < 256; i++) {
        console.log(i);
    }
}

//2
function getEven1000() {
    var sum = 0;
    for (var i = 2; i <= 1000; i = i + 2) {
        sum = sum + i;
    }
    console.log(sum);
}

//3
function SumOdd5000() {
    var sum = 0;
    for (var i = 1; i <= 5000; i = i + 2) {
        sum = sum + i;
    }
    console.log(sum);
}

//4
function IterateAnArray() {
    for (var i = 0; i < x.length; i++) {
        console.log(x[i]);
    }
}

//5
function FindMax() {
    var max = x[0];
    for (var i = 1; i < x.length; i++) {
        if (x[i] > max) {
            max = x[i];
        }
    }
    console.log(max);
}

//6
function FindAverage() {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    var average = sum / x.length;
    console.log(average);
}

//7
function ArrayOdd() {
    var y = [];
    for (var i = 1; i < 50; i++) {
        y.push(i);
    }
    console.log(y);
}

//8
function GreaterThanY() {
    var count = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] > y) {
            count++;
        }
    }
    console.log(count);
}

//9
function squares() {
    for (var i = 0; i < x.length; i++) {
        x[i] = x[i] * x[i];
    }
    console.log(x);
}

//10
function negatives() {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x = 0;
        }
    }
}

//11
function MinMaxAvg() {
    var max = x[0];
    var min = x[0];
    var sum = 0;
    sum = sum + x[0];
    for (var i = 1; i < x.length; i++) {
        if (x[i] > max) {
            max = x[i];
        }
        if (x[i] < min) {
            min = x[i];
        }
        sum = sum + x[i];
    }
    console.log('Max is ', max);
    console.log('Min is ', min);
    console.log('Avg is ', sum / x.length);
}

//12
function swapValues() {
    console.log(x);
    for (var i = 0; i < x.length - 1; i++) {
        x[i] = x[i + 1];
    }
    x[x.length - 1] = 0;
    console.log(x);
}

//13
function numberToString() {
    x = [-1, -3, 2];
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 'Dojo';
        }
    }
    console.log(x);
}