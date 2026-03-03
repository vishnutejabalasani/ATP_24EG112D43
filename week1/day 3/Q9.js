//filter()
const temperatures = [32, 35, 28, 40, 38, 30, 42];
result=temperatures.filter(function (element){
return element>30

})
console.log(result)

//map()
let mapdemo=temperatures.map(element=>element*(9/5)+32)
console.log(mapdemo)

//reduce()
const sum =temperatures.reduce((accumulator,element)=>accumulator+element/2)
console.log(sum)

