function produceDrivingRange(distance){
  return function(traveled){
  let trav =  parseInt(traveled)
  if(distance < trav){
      return `within range by ${distance - trav}`
    else {
     return   `${trav -  distance} blocks out of range`
    }
  }
  }
}
