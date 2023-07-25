function minMaxSum(array) {
  let minItem = array[0];
  let maxItem = array[0];
  let totalSum = array[0];

  for (let i = 1; i < array.length; i++) {
    totalSum += array[i];
    if (array[i] < minItem) {
      minItem = array[i];
    } else if (array[i] > maxItem) {
      maxItem = array[i];
    }
  }

  const minSum = totalSum - maxItem;
  const maxSum = totalSum - minItem;

  console.log(minSum, maxSum);
}

minMaxSum([1, 3, 5, 7, 9])
minMaxSum([1, 2, 3, 4, 5])
