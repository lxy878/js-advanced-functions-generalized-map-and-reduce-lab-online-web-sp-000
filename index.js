// Add your functions here

function map(array, cb){
  let results = [];
  for (const n of array)
    results.push(cb(n));
  return results;
}

function reduce(array, cb, p){
  let result;
  if p
    result = p + array[0]
  else
    result = array[0];

  for (let i=1; i < array.length; i++)
   result = cb(length[i], result);
  return result;
}
