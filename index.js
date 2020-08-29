// Add your functions here

function map(array, cb){
  let results = [];
  for (const n of array)
    results.push(cb(n));
  return results;
}

function reduce(array, cb, p){
  let result = 
  for (const v of array)
   result = cb(v, result);
  return result;
}
