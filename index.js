// Your code here
const mapToNegativize = (sourceArray) => {
  return sourceArray.map(n => n * -1)
}
const mapToNoChange = (arr) => {
  return arr.map(n => n)
}
const mapToDouble = (arr) => {
  return arr.map(n => n * 2)
}
const mapToSquare = (arr) => {
  return arr.map(n => n ** 2)
} 

const reduceToTotal = (arr, startingPoint=0) => {
 return arr.reduce((acc,currentValue) =>{
   return acc + currentValue
 },startingPoint)
}

const reduceToAllTrue = (arr) => {
  return arr.reduce((acc,currentValue) => {
    return acc && Boolean(currentValue);
  }, true)
}
const reduceToAnyTrue = (arr) => {
  return arr.reduce((acc, currentValue) => acc || Boolean(currentValue),false)
}