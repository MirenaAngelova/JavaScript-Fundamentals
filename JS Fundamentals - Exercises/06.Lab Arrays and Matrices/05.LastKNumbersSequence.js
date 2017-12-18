function lastKNumbers(n, k) {
    let sequence = [];
    sequence[0] = 1;
    let currentIndex = 1;
    while (n > 1) {
        let sum = 0;
        let firstIndex = Math.max(currentIndex - k, 0);
        for (let i = currentIndex - 1; i >= firstIndex; i--) {
            sum += sequence[i];
        }
        sequence.push(sum);
        currentIndex++;
        n--;
    }
    console.log(sequence.join(' '));
}
// lastKNumbers(6, 3);
// lastKNumbers(8, 2);