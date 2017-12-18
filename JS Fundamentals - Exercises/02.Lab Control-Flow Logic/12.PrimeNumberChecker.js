function primeNumber([n]) {
    let prime = true;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }

    console.log(prime && (n > 1));
}
primeNumber(['1']);
/* primeNumber(['7']);
primeNumber(['8']);
primeNumber(['81']);
primeNumber(['1']); */
//, , , 877, 881, 883, 887, , 911, 919,
//929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997