const findFloor = (arr, n, low = 0, high = arr.length - 1) => {
    let mid = Math.floor((low + high) / 2);
    
    if (low > high) {
        return -1;
    }

    if (n >= arr[high]) {
        return arr[high];
    }

    if (arr[mid] === n) {
        return arr[mid];
    }

    if (mid > 0 && arr[mid - 1] <= n && n < arr[mid]) {
        return arr[mid - 1];
    }

    if (n < arr[mid]) {
        return findFloor(arr, n, low, mid - 1);
    }

    return findFloor(arr, n, mid + 1, high)
}

module.exports = findFloor