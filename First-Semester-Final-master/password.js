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

}
