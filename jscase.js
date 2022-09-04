function oddishOrEvenish(number) {
    let sumOfDigits = 0;
    
    let digits = number.toString().split('');
    for (const digit of digits) {
        sumOfDigits += parseInt(digit);

    }
    if (sumOfDigits % 2 == 1) {
        console.log("oddish");
        return "oddish";

    }
    console.log("evenish");
    return "evenish";
}
oddishOrEvenish(43);
oddishOrEvenish(373);
oddishOrEvenish(4433);
