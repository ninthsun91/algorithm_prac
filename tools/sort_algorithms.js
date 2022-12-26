/**
 * Bubble Sort
 * 
 * compare neighbouring two element from the beginning to the end
 */

/** */
const bubbleSort = (array) => {
    for (let i=0; i<array.length; i++) {
        for (let j=0; j<array.length; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
}


/**
 * 
 * Selection Sort
 * 
 * find the minimum value belonging to the index
 * 
 */

/** */
const selectionSort = (array) => {
    for (let i=0; i<array.length; i++) {
        for (let j=i; j<array.length; j++) {
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
}


/**
 * 
 * Insert Sort
 * 
 * start from second element
 * go through from i-1 to 0
 * find the order of the target element
 * 
 */

/** */
const insertSort = (array) => {
    for (let i=1; i<array.length; i++) {
        const target = array[i];

        let j = i-1;
        for ( ; j>-1 && target < array[j]; j--) {
            array[j+1] = array[j];
        }
        array[++j] = target;
    }
}


/**
 * 
 * merge Sort
 * 
 * split array into pieces
 * [3, 1, 2, 4] => [3], [1] // [2], [4]
 * compare and order in new array
 * [1,3] // [2,4]
 * shift out the smaller one and place in new array
 * [3] // [2,4] // [1]
 * [3] // [4] // [1,2]
 * [] // [4] // [1,2,3]
 * [] // [] // [1,2,3,4]
 * 
 * recursion
 * 
 */

/** */
const mergeSort = (array, start, end) => {
    const mid = ((start+end)/2)|0;
    const length = end - start;

    if (length > 1) {
        const left = mergeSort(array, start, mid);
        const right = mergeSort(array, mid, end);
        
        let [n, m] = [0, 0];
        while (n+m !== length) {
            if (!right[m] || left[n] <= right[m]) {
                array[start+n+m] = left[n++];
                continue;
            }
            if (!left[n] || left[n] > right[m]) {
                array[start+n+m] = right[m++];
                continue;
            }
        }

        return array.slice(start, end);
    } else {
        return array.slice(start, end);
    }
}

/**
 * 
 * quick Sort
 * 
 * pick pivot
 * [*3,1,2,4]
 * order in compare to pivot
 * [1,2,*3,4]
 * half array
 * [1,2] // [3,4]
 * pick pivot and repeat until single element left
 * [1] // [2] // [3] // [4]
 * merge all
 * 
 */

/** */
const quickSort = (array, start, end) => {
    const length = end - start;

    if (length > 1) {
        const pivot = array[start];

        let left = [];
        let right = [];
        for (let i=start+1; i<end; i++) {
            if (array[i] <= pivot) left.push(array[i]);
            if (array[i] > pivot) right.push(array[i]);
        }
        pivot <= right[0] ? left.push(pivot) : right.push(pivot);

        left = quickSort(left, 0, left.length);
        right = quickSort(right, 0, right.length);

        // let index = start;
        // while (left.length) array[index++] = left.shift();
        // while (right.length) array[index++] = right.shift();

        // return array.slice(start, index);
        return left.concat(right);
    } else {
        return array;
    }
}



const array = [];
for (let i=0; i<10000; i++) {
    array.push( (Math.random()*100000)|0 );
}

console.time('bubble');
bubbleSort([...array]);
console.timeEnd('bubble');

console.time('selection');
selectionSort([...array]);
console.timeEnd('selection');

console.time('insert');
insertSort([...array]);
console.timeEnd('insert');

console.time('merge');
mergeSort([...array], 0, array.length);
console.timeEnd('merge');

console.time('quick');
quickSort([...array], 0, array.length);
console.timeEnd('quick');