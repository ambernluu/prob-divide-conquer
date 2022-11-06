const findRotatedIndex = (array, n) => {
    let pivot = findPivot(array)
    if (pivot > 0 && n >= array[0] && n <= array[pivot - 1]) {
        return binarySearch(array, n, 0, pivot - 1);
    } else {
        return binarySearch(array, n, pivot, array.length - 1);
    }
}

const binarySearch = (array, n, start, end) => {
    if ((array.length === 0) || (n < array[start] || n > array[end])) {
        return -1;
    }

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === n) {
            return mid;
        }
        
        else if (n < array[mid]) {
            end = mid - 1;
        }
        
        else {
            start = mid + 1;
        }
    }
    return -1;
}

const findPivot = (arr) => {
    let start = 0;
    let end = arr.length - 1;

    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) {
        return 0;
    }

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid + 1]) {
            return mid + 1;
        }

        else if (arr[start] <= arr[mid]) {
            start = mid + 1;
        }
        
        else {
            end = mid - 1;
        }
    }
}

module.exports = findRotatedIndex