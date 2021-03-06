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
    for(let c = 0; c < this.itemList.length; c ++){
    total += this.itemList[c].price * this.itemQuantity[c];
    }
    return total;
  }
  subCart(days){
    subCart = new Cart([],[]);
    for(let x = 0; x < this.itemList.length; x ++){
      if(this.itemList[x].shipping == days){
        subCart.itemList.push(this.itemList[x]);
        subCart.itemQuantity.push(this.itemQuantity[x]);
      }
    }
    return subCart;
  }

}
