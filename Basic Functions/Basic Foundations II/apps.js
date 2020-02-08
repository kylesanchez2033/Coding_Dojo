//1
function BaggieSize(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}
BaggieSize([-1, 3, 5, -5])

//2
function PrintLowReturnHigh(arr) {
    var low = arr[0];
    var high = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > high) {
            high = arr[i]
        } if (arr[i] < low) {
            low = arr[i];
        }
    }
    console.log(low);
    return high;
}
PrintLowReturnHigh([-1, 3, 5, -5])

//3
function PrintOneReturnAnother(arr) {
    console.log(arr[arr.length - 3]);
    return arr[0];
}
PrintOneReturnAnother([-1, 3, 5, -5]);

//4
function DoubleVision(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
DoubleVision([-1, 3, 5, -5]);

//5
function CountPositives(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}
CountPositives([-1, 1, 1, 1])

//6
function EvensAndOdds(arr) {
    var odds = 0;
    var evens = 0;
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i] % 2 === 1) {
            odds++;
        } if (arr[i] % 2 === 0) {
            evens++;
        } if (odds >= 3) {
            console.log("That's odd!");
            odds = 0;
        } if (evens >= 3) {
            console.log("Even more so!");
            evens = 0;
        }
    }
}
EvensAndOdds([6, 2, 3, 3, 5, 1])

//7
function IncrementTheSeconds(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (i % 2 == 1) {
            arr[i] = arr[i + 1] + 1;

        } console.log(arr[i]);
    }
    return arr;
}
IncrementTheSeconds([-1, 3, 5, -5])

//8
function previousLengths(arr) {
    var count = 0;
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    return arr;
}
previousLengths(["hello", "dojo", "awesome"]);

//9
function AddSevenToMost(arr) {
    var newArr = [];
    for (var i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
}
AddSevenToMost([-1, 3, 5, -5]);

//10
function reverseArray(arr) {
    var index = arr.length - 1;
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[index - i];
        arr[index - i] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
reverseArray([3, 1, 6, 4, 2])

//11
function Negative(arr) {
    var NewArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = arr[i] - (arr[i] * 2);
            NewArr.push(arr[i]);
        } else {
            NewArr.push(arr[i]);
        }
    }
    return NewArr
}
Negative([1, -3, 5]);

//12
function AlwaysHungry(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        var current = arr[i].toLowerCase();
        if (current === "food") {
            count++;
            console.log("yummy");

        }
    } if (count === 0) {
        console.log("I'm hungry");
    }
}
AlwaysHungry(["nO", "plus", "Food"]);

//13
function SwapCenter(arr) {
    var index = arr.length - 1;
    for (var i = 0; i < arr.length / 2; i += 2) {
        var temp = arr[(index) - i];
        arr[(index) - i] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
SwapCenter([1, 2, 3, 4, 5, 6])

//14
function ScaleArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}
ScaleArray([1, 2, 3], 3);



