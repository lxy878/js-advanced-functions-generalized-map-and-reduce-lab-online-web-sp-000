// Add your functions here

function map(array, cb){
  let results = [];
  for (const n of array)
    results.push(cb());
  return results
}
