var input = process.argv[2];

if (input[0] === "1") {
    input = input.slice(1);
}

while (input.indexOf("-") >= 0 || input.indexOf("(") >= 0 ||
    input.indexOf(")") >= 0 || input.indexOf(" ") >= 0){
    input = input.replace("-", "").replace("(","").replace(")","").replace(" ","")
;
}

if (input.length === 10 && parseInt(input)) {
    console.log("Valid");
} else {
    console.log("InValid");
}