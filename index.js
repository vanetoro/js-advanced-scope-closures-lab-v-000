function produceDrivingRange(distance){
  return function(traveled){
  let trav =  parseInt(traveled)
  console.log(distance)
  console.log(trav);
  if(distance < trav){
    return  `within range by ${distance - trav}`
      } else {
    return ` ${trav - distance}  blocks out of range`
    }
    }
}
