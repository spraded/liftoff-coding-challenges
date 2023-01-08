function minMax(arr) {
    let min = Math.min.apply(Math, arr);
    let max = Math.max.apply(Math, arr);
    let minMax = [min, max];
    return minMax;
}
