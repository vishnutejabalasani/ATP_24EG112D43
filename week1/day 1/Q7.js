
let test = function find (arr,search){
for (let i = 0 ; i<arr.length;i++){
     if(search === arr[i])
       return i
   
 
}
return "not found"


}
let call = test([3,4,5],5)
console.log(call)

