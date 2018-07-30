function produceDrivingRange(distance){
  return function(traveled){
    console.log(distance)
    console.log(parseInt(traveled))
    return distance < parseInt(traveled)
  }
}
