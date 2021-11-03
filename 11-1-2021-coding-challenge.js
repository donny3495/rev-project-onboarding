function zerosToEnd(array){
    let zeros = 0;
    for(let i = 0; i<array.length - zeros; i++){
        if(array[i] === 0){
           array.splice(i,1)
           array.push(0) 
            zeros++
            i--
        }
    }

}

const arr1 = [1, 2, 0, 0, 4, 0, 5];
zerosToEnd(arr1);
console.log(`zerosToEnd([1, 2, 0, 0, 4, 0, 5]) => ${arr1}`)

const arr2 = [0, 0, 2, 0, 5];
zerosToEnd(arr2);
console.log(`zerosToEnd([0, 0, 2, 0, 5]) => ${arr2}`)

const arr3 = [4, 4, 5];
zerosToEnd(arr3);
console.log(`zerosToEnd([4, 4, 5]) => ${arr3}`)

const arr4 = [0, 0];
zerosToEnd(arr4);
console.log(`zerosToEnd([0, 0]) => ${arr4}`)

function shiftToRight(a,b) {
  return Math.floor(a / Math.pow(2, b))
}


console.log(`shiftToRight(80, 3) = ${shiftToRight(80, 3)}`)
console.log(`shiftToRight(-24, 2) = ${shiftToRight(-24, 2)}`)
console.log(`shiftToRight(-5, 1) = ${shiftToRight(-5, 1)}`)
console.log(`shiftToRight(4666, 6) = ${shiftToRight(4666, 6)}`)
console.log(`shiftToRight(3777, 6) = ${shiftToRight(3777, 6)}`)
console.log(`shiftToRight(-512, 10) = ${shiftToRight(-512, 10)}`)