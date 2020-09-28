
exports.min = function min (array) {
  if (!array || array.length == 0) return 0;
  let numberMin = array[0];
  for (let i = 1; i < array.length; i++){
    if (array[i] < numberMin){
      numberMin = array[i];
    }
  }
  return numberMin;
}

exports.max = function max (array) {
  if (!array || array.length == 0) return 0;
  let numberMax = array[0];
  for (let i = 1; i < array.length; i++){
    if (array[i] > numberMax){
      numberMax = array[i];
    }
  }
  return numberMax;
}

exports.avg = function avg (array) {
  if (!array || array.length == 0) return 0;
  let summa = array.reduce(function(a, b){ return a + b; });
  return result = summa / array.length;
}
