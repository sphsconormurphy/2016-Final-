class Password{
  //The first part of the class.
  constructor(p, pk){
    this.publickey = p;
    this.privatekey = pk;
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
    if(this.privatekey[4] == "-" && this.privatekey[9] == "-"){
      if(){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }

  //Static function below this comment.
  static makePrivateKey(){
    let key = "";
    let limit = 14;
    for(let d = 0, d < limit, d ++){
      if(i == 4 || i == 9){
        key = key + "-";
      }
      else{
        let number = Math.random();
        number = Math.ceil(number * 9);
        number = number + 48;
        numner = String(number);
        key = key + number;
      }
    }
    return key;
  }

}
