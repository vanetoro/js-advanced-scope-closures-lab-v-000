function produceDrivingRange(distance){
  return function(traveled){
    console.log(distance)
    console.log(traveled)
    return distance < traveled
  }
}
