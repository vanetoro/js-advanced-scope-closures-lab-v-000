function produceDrivingRange(distance){
  return function(travelled){
    console.log(distance)
    console.log(travelled)
    return distance < travelled
  }
}
