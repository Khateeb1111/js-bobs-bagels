class Basket {
 
  constructor() {
    this.bagels = []

}

addBagel(type) {
  this.bagels.push( {type: type} )
  

}  

removeBagel(type) {
  for(let i=0; i<this.bagels.length; i++) {
    if (this.bagels[i].type===type)   //remove it from list
    this.bagels.splice(i, 1)
    return

  }

}

getBagels() {
  return this.bagels 

}


}





module.exports = Basket;