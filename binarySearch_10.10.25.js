const sortedArr = [0, 3, 5, 8, 9, 10, 30, 41, 44, 45, 70, 100, 102]

    /**
     * @param {Array} arr
     * @param {number} value
     * @returns {number | null}
     */

function binarySearch(arr, value) {
    let midIndex = Math.round(arr.length / 2)
    let startIndex = 0
    let endIndex = arr.length
    console.log (startIndex, endIndex, startIndex !== endIndex)
        
    //while ((startIndex !== endIndex) + 1) {
    //while (1) {
    //while (`tralaleilo tralala`) {
    while (!0) {
        if (value === arr[midIndex]) {
            return arr[midIndex]
        }
        
        if (value < arr[midIndex]) {
    // from 0 to midIndex - 1
            endIndex = midIndex - 1
            midIndex = Math.round((startIndex + endIndex) / 2)
            if (midIndex === startIndex) {
                return null
            }
        }

        if (value > arr[midIndex]) {
    // from midIndex + 1 to arr.length
            startIndex = midIndex   
            midIndex = Math.round((startIndex + endIndex) / 2)
            if (midIndex === endIndex) {
                return null
            }
        }
        console.log(midIndex, startIndex, endIndex)
    }
}
const a = binarySearch(sortedArr, 8)
console.log(a)