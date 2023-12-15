function absDiff(num1, num2) {
    return Math.abs(num1 - num2);
}

function sumArray(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

function processArrays(arrayA, arrayB) {
    const diffArray = [];

    for (let i = 0; i < arrayA.length; i++) {
        for (let j = 0; j < arrayA.length; j++) {
            // Swap elements to compare different combinations
            const temp = arrayA[i];
            arrayA[i] = arrayB[j];
            arrayB[j] = temp;

            // Calculate sums and absolute difference
            const sumA = sumArray(arrayA);
            const sumB = sumArray(arrayB);
            const diff = absDiff(sumA, sumB);
            diffArray.push(diff);

            // Swap elements back to their original positions
            arrayB[j] = arrayA[i];
            arrayA[i] = temp;
        }
    }

    // Find the minimum difference among all combinations
    const minDiff = Math.min(...diffArray);
    return minDiff;
}

function splitArray(inputArray) {
    // Split the array into two parts
    const midpoint = inputArray.length / 2;
    const arrayA = inputArray.slice(0, midpoint);
    const arrayB = inputArray.slice(midpoint);

    // Process the arrays and return the result
    const minDiffResult = processArrays(arrayA, arrayB);
    return minDiffResult;
}

// Export the splitArray function
module.exports = splitArray;
