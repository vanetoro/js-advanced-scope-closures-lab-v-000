function produceDrivingRange(range){
  return function(trvlFrom, trvlTo){
  trvlTo =  parseInt(trvlTo)
  trvlFrom = parseInt(trvlFrom)
  console.log(trvlTo)
  console.log(trvlFrom)
  console.log(range)
  console.log(trvlTo - trvlFrom <= range)
  if(trvlTo - trvlFrom <= range){
    return  `within range by ${Math.abs(trvlTo -trvlFrom)}`
      } else {
    return `${Math.abs(trvlTo - trvlFrom)} blocks out of range`
    }
    }
}
