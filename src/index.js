
exports.min = function min (array) {
  if (Array.isArray(array) && array.length > 0) {
    function compare(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      if (a === b) return 0;
    };
    let sortArray = array.sort(compare);
    return sortArray[0];
  }
  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length > 0) {
    function compare(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      if (a === b) return 0;
    };
    let sortArray = array.sort(compare);
    return sortArray[array.length - 1];
  }
  return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length > 0) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    return sum / array.length;
  }
  return 0;
}
