const maxProfit = (prices) => {
    return prices.reduce((acc,v,i,arr) => {
        return v > arr[i-1] ? acc+v-arr[i-1]:acc;
    },0);
}
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,2,1]));