/*
Modify parameters section in the "processQuantities" function to match console.log outputs
*/
/**
 * use array destructuring directly in the parameter section and assign default value to the defaultQty parameter, if this element  is missing in the array, that was destructured
 */
const processQuantities = ([minQty, maxQty, defaultQty = 0]) => {
  console.log(minQty); // 8
  console.log(maxQty); // 29
  console.log(defaultQty); // 0
  return maxQty - minQty; // returns 21
};

// destructure this array directly in the parameter section of the function
const qtyRange = [8, 29];

processQuantities(qtyRange);
