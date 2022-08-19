console.log(first_and_last([1, 2, 5, 5, 5, 5, 5, 7, 9], 5));
console.log(first_and_last([1, 2, 5, 5, 5, 5, 5], 5));
console.log(first_and_last([5, 5, 5, 5, 7, 9], 5));
console.log(first_and_last([1, 2, 5, 5, 5, 5, 5, 7, 9], 2));

function find_start(arr, target) {
  if (arr[0] == target) {
    return 0;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    mid = Math.round((left + right) / 2);
    if (arr[mid] == target && arr[mid - 1] < target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function find_end(arr, target) {
  if (arr[arr.length - 1] == target) {
    return arr.length - 1;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    mid = Math.round((left + right) / 2);
    if (arr[mid] == target && arr[mid + 1] > target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

function first_and_last(arr, target) {
  if (arr.length == 0 || arr[0] > target || arr[arr.length - 1] < target) {
    return [-1, -1];
  }
  start = find_start(arr, target);
  end = find_end(arr, target);
  return [start, end];
}
