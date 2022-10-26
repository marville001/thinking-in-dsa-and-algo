const rotate = (array, by, length) => {
    
    let temp = new Array(length);

    let k = 0;

    for (let i = by; i < length; i++){
        temp[k] = array[i];
        k++;
    }

    for (let i = 0; i < by; i++){
        temp[k] = array[i];
        k++;
    }

    return temp;
};

(() => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const by = 3;
    const length = array.length;
    console.log("BEFORE : ", array);
    const afterRotation = rotate(array, by, length);
    console.log("AFTER : ", afterRotation);
})();
