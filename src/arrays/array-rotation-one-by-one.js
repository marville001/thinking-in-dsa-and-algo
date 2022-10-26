const rotate = (array, by, length) => {
    let rotations = 1;

    while (rotations <= by) {
        let first = array[0];

        for (let i = 0; i < length - 1; i++) {
            array[i] = array[i + 1];
        }

        array[length - 1] = first;
        rotations++;
    }

    return array;
};

(() => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const by = 3;
    const length = array.length;
    console.log("BEFORE : ", array);
    const afterRotation = rotate(array, by, length);
    console.log("AFTER : ", afterRotation);
})();
