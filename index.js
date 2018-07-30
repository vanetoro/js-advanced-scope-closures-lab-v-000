function produceDrivingRange(distance){
  return function(traveled){
  let trav =  parseInt(traveled)
  if(distance < trav){
    `within range by ${distance - trav}`
    else {
      `${trav -  distance} blocks out of range`
    }
  }
  }
}
