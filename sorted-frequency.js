const sortedFrequency = (arr, n) => {
    let fIdx = findFirst(arr, n);
    if (fIdx == -1) return fIdx;
    let lIdx = findLast(arr, n);
    return lIdx - fIdx + 1;
}

const findFirst = (arr, n, low = 0, high = arr.length - 1) => {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2)
        if ((mid === 0 || n > arr[mid - 1]) && arr[mid] === n) {
            return mid;
        } else if (n > arr[mid]) {
            return findFirst(arr, n, mid + 1, high)
        } else {
            return findFirst(arr, n, low, mid - 1)
        }
    }
    return -1
}

const findLast = (arr, n, low = 0, high = arr.length - 1) => {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2)
        if ((mid === arr.length - 1 || n < arr[mid + 1]) && arr[mid] === n) {
            return mid;
        } else if (n < arr[mid]) {
            return findLast(arr, n, low, mid - 1)
        } else {
            return findLast(arr, n, mid + 1, high)
        }
    }
    return -1
}

module.exports = sortedFrequency