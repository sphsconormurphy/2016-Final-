class Password{
  //The first part of the class.
  constructor(pub, priv){
    this.publickey = pub;
    this.privatekey = priv;
  }


  //Instance functions below this comment.
  validPublicKey(){
    if(this.publickey.length >= 8 && this.publickey.length <= 25){
      return true;
    }
    else{
      return false;
    }
  }
  validPrivateKey(){
      for(let w = 0; w < this.privatekey.length; w ++){
        if(w == 4 || w == 9){
          if(this.privatekey[w] !== "-"){
            return false;
          }
        }
        else if(Number.isNaN(this.privatekey[w])){
          return false;
        }
      }
      return true;
  }

  //Static function below this comment.
  static makePrivateKey(){
    let key = "";
    let limit = 14;
    for(let d = 0; d < limit; d ++){
      if(d == 4 || d == 9){
        key = key + "-";
      }
      else{
        let number = Math.random();
        number = Math.ceil(number * 9);
        number = String(number);
        key = key + number;
    }

    }
      return key;
  }

}
