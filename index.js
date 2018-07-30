function produceDrivingRange(distance){
  return function(traveled){
  let trav =  parseInt(traveled)
  if(distance < trav){
    return  `within range by ${trav -  distance} `
      } else {
    return ` ${distance - trav} blocks out of range`
    }
    }
}
