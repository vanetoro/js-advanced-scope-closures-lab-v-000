function produceDrivingRange(range){
  return function(trvlFrom, trvlTo){
  let trvlTo =  parseInt(trvlTo)
  let trvlFrom = parseInt(trvlFrom)
  
  if(trvlTo - trvlFrom <= range){
    return  `within range by ${Math.abs(trvlTo - trvlFrom)}`
      } else {
    return `${Math.abs(trvlTo - trvlFrom)} blocks out of range`
    }
    }
}
