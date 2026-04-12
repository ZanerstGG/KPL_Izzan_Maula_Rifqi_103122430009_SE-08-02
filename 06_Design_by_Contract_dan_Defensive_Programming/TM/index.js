function is_not_fizbuzz(number) {
    if(!Number.isInteger(number)) {
        throw new TypeError("Input harus berupa bilangan bulat");
    }

    if(number %  3 === 0 || number % 5 === 0) {
        return false;
    }
    return true;
}
    console.log(is_not_fizbuzz(1)) // true
    console.log(is_not_fizbuzz(3)) // false
    console.log(is_not_fizbuzz(5)) // false
    console.log(is_not_fizbuzz(30)) // false
    console.log(is_not_fizbuzz(7)) // true
    try {
    console.log(is_not_fizbuzz(null)) // Lempar TypeError
    } catch (e) {
        console.log("Error:", e.name);
    }
    try {
    console.log(is_not_fizbuzz(NaN)) // Lempar TypeError
    } catch (e) {
        console.log("Error:", e.name);
    }
    try {
    console.log(is_not_fizbuzz(Infinity)) // Lempar TypeError
    } catch (e) {
        console.log("Error:", e.name);
    }


