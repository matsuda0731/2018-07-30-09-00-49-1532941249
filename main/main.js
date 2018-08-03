module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
// Write your code here
最大值 = ${sequence.maxmum()},平均值 = ${sequence.average()},元素数量 = ${sequence.number()},
`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    this.arr = input,
    this.minimum = minimum,
    this.maxmum = maxmum,
    this.average = average,
    this.number = number
  },

  minimum() {
    // Write your code here
     let newArr = this.arr.sort(function(a,b){return a-b});
     return newArr[0];
  }

  // Write your code here
   maxmum() {
    // Write your code here
     let newArr = this.arr.sort(function(a,b){return a-b});
     return newArr[this.arr.length-1];
  }

  average(){
  	let sum = 0;
    let i;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length
  }
  number(){
  	reutrn this.arr.length;
  }

}
