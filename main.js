for (let num = 1; num <= 100; num++) {
    //numbers divisable by 3 and 5 will appear as 'FizzBuzz'
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz")
    }
    //numbers divisable by 3 but not 5 will appear as 'Fizz'
    else if (num % 3 === 0) {
        console.log("Fizz")
    } 
    //numbers divisable by 5 but not 3 will appear as 'Buzz'
    else if (num % 5 === 0) {
        console.log("Buzz")
    }
    //all other numbers will be unaltered
    else {
        console.log(num)
    }
}