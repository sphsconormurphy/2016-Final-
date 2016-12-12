class Cart{
  //What is the first part of every class? Type it below.
  constructor(iL, iQ){
    this.itemList = iL;
    this.itemQuantity = iQ;
  }

  //Type the instance functions below this comment.
  addItem(i, q){
    this.itemList.push(i);
    this.itemQuantity.push(q);
  }
  totalCart(){
    let total = 0;
    for(c = 0, c<this.itemList.length, c++){
    total += this.itemList[c].price * this.itemQuantity[c];
    }
    return total;
  }
  subCart(days){
    subCart = new Cart([],[]);
    for(c = 0, c<this.itemList.length, c++){
      if(this.itemList[c].shipping == days){
        subCart.itemList.push(this.itemList[c]);
      }
    }
    return subCart;
  }

}
