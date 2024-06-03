function random(N) {
    for (let i = 1; i <= N; i++) {
        if (i % 15 === 0) {
            console.log('fizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

random(prompt('Inserisci un numero'));