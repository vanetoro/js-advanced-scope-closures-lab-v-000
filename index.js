function produceDrivingRange(range){
  return function(trvlFrom, trvlTo){
  trvlTo =  parseInt(trvlTo)
  trvlFrom = parseInt(trvlFrom)
  console.log(trvlTo)
  console.log(trvlFrom)
  if(trvlTo - trvlFrom <= range){
    return  `within range by ${Math.abs(trvlFrom - trvlTo)}`
      } else {
    return `${Math.abs(trvlTo - trvlFrom)} blocks out of range`
    }
    }
}
