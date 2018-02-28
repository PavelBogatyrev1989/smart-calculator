class SmartCalculator {
  constructor(initialValue) {
    this.buff = initialValue;
    this.toString = () => eval(this.buff); 
  }

  add(number) {
    this.buff = this.buff + "+" + number;
    return this;
  }
  
  subtract(number) {
     this.buff = this.buff+"-" + number;
    return this;
  }

  multiply(number) {
     this.buff =this.buff+ "*" + number;
    return this;
  }

  devide(number) {
    if(number!=0){
       this.buff = this.buff+"/" + number;
      return this;
    }else return false;

  }

  pow(number) {
     this.buff = this.buff+"**" + number;
    return this;
  }
}

module.exports = SmartCalculator;
