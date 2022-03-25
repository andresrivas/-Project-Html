function comparacionesRelacionales(num1, num2) {
    let test = true
    if (num1 < num2) {
        console.log(`${num1} ${"<"} ${num2}` + " = " + test);
        test = false;
        console.log(`${num1} ${">"} ${num2}` + " = " + test);
    } else {
        test = false;
        console.log(`${num1} ${"<"} ${num2}` + " = " + test);
        if (num1 > num2) {
            test = true;
            console.log(`${num1} ${">"} ${num2}` + " = " + test);
        } else {
            test = false;
            console.log(`${num1} ${">"} ${num2}` + " = " + test);
        }

    }

    if (num1 === num2) {
        test = true;
        console.log(`${num1} ${"==="} ${num2}` + " = " + test);
        test = false;
        console.log(`${num1} ${"!=="} ${num2}` + " = " + test);
    } else {
        test = false;
        console.log(`${num1} ${"==="} ${num2}` + " = " + test);
        test = true;
        console.log(`${num1} ${"!=="} ${num2}` + " = " + test);
    }
}

comparacionesRelacionales(30, 2);