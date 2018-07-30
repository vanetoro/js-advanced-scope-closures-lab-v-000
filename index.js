function produceDrivingRange(range){
  return function(trvlFrom, trvlTo){
  trvlTo =  parseInt(trvlTo)
  trvlFrom = parseInt(trvlFrom)
  if(trvlTo - trvlFrom <= range){
    return  `within range by ${Math.abs(trvlTo -trvlFrom)}`
      } else {
    return `${Math.abs(trvlTo - trvlFrom) - range} blocks out of range`
    }
    }
}

function produceTipCalculator(percent){
    return function(bill){
    bill * percent
  }
}
