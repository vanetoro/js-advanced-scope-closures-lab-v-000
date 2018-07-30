function produceDrivingRange(distance){
  return function(traveled){
  let trav =  parseInt(traveled)
  if(distance < trav){
    return  `${trav -  distance} blocks out of range`
      } else {
    return ` ${distance - trav} `
    }
    }
}
