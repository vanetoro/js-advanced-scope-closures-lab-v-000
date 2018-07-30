function produceDrivingRange(distance){
  return function(travelled){
    return distance < travelled
  }
}