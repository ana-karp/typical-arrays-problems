
exports.min = function min (array) {
  return (!array || array.length === 0) ? 0 : Math.min(...array);
}

exports.max = function max (array) {
    return (!array || array.length === 0) ? 0 : Math.max(...array);
}

exports.avg = function avg (array) {
    if(!array || array.length === 0) {
        return 0;
    }
    let sum = array.reduce((a, b) => a + b);
    return sum / array.length;
}
