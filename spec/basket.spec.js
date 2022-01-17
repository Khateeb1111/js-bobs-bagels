const Basket = require("../src/basket.js"); 

describe("Basket:", () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  });

//   it("empty basket", function() {
//     // set up
//     const expected = [];
//     // execute
//     const result = basket.getBasket();
//     // verify
//     expect(result).toEqual(expected);
//   });
// });


  it("add a bagel to basket", () => {
    // set up
    const expected = [
      {type:'blueberry'}
    ]// 
    // execute
    basket.addBagel("blueberry")
    const bagels = basket.getBagels()
    // verify
    expect(bagels).toEqual(expected);
  });

it("remove a bagel from basket", () => {
    // set up
    const expected = [];// or whatever the removeItem method returns
    // execute
    basket.addBagel("blueberry")
    basket.removeBagel("blueberry")
    const bagels = basket.getBagels();
    // verify
    expect(bagels).toEqual(expected);
});



  });

module.exports = Basket;