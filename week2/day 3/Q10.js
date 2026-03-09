
const cart = [
    { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
    { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//filter


let result = cart.filter(cartobj => cartobj.inStock == true)
console.log(result)

// Use map() to create a new array with:  { name, totalPrice }
let data = cart.map(cartobj => cartobj.name +"  "+ cartobj.price*cartobj.quantity)
console.log(data)

//Use reduce() to calculate grand total cart value
const sum =cart.reduce((res,cur)=>res = res + (cur.price*cur.quantity),0)
console.log(sum)


//



//Use find() to get details of "Mouse"
let el = cart.find(element=> element.name==="Mouse")
console.log(el)

//Use findIndex() to find the position of "Keyboard"
let el1 = cart.findIndex(element=> element.name==="Keyboard")
console.log(el1)


// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//Tasks:
  //  1. filter() students who passed (marks ≥ 40)

  let result1 = students.filter(g =>g.marks>=40 )
  console.log(result1)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
    let grade = students.map(s =>{
        if(s.marks>=90)
            g ='A'
        else if(s.marks>=75)
            g='B'
        else if(s.marks>=60)
            g='C'
        else
            g='D'

        return {
            ...s,
            grade :g
        }

    } )
    console.log(grade)
//    3. reduce() to calculate average marks
let avg = students.reduce((sum,cur)=>sum+cur.marks,0)
console.log(avg)
//    4. find() the student who scored 92
let findd = students.find(n=>n.marks===92)
console.log(findd)
//    5. findIndex() of student "Kiran"
let findi = students.findIndex(n=>n.name==="Kiran")
console.log(findi)


// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// Tasks:
//     1. filter() employees from IT department
let emp  = employees.filter(x=>x.department==="IT")
console.log(emp)
//     2. map() to add:
//             netSalary = salary + 10% bonus
          let salary = employees.map(x=>x.salary+x.salary*0.1)
          console.log(salary)
//     3. reduce() to calculate total salary payout
        let total = employees.reduce((tot,cur)=>tot+cur.salary,0)
        console.log(total)
//     4. find() employee with salary 30000
     let sal = employees.find(x=>x.salary===30000)
     console.log(sal)
//     5. findIndex() of employee "Neha"
let index = employees.findIndex(x=>x.name==="Neha")
console.log(index)


// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


// Tasks:
//     1. filter() only "Sci-Fi" movies
      let mov = movies.filter(x=>x.genre==="Sci-Fi")
      console.log(mov)
//     2. map() to return:
//             "Inception (8.8)"
                let inc = movies.map(x=>`${x.title}(${x.rating})`)
                console.log(inc[0])

                


//     3. reduce() to find average movie rating
     let red= movies.reduce((res,cur)=>res=res+cur.rating,0)/movies.length
     console.log(red)
//     4. find() movie "Joker"
    let jok = movies.find(x=>x.title==="Joker")
    console.log(jok)
//     5. findIndex() of "Avengers"
    let joki = movies.findIndex(x=>x.title==="Avengers")
    console.log(joki)


//     ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transac = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// Tasks:
//     1. filter() all credit transactions
            let cre = transac.filter(x=>x.type==="credit")
            console.log(cre)
//     2. map() to extract only transaction amounts
            let amt = transac.map(x=>x.amount)
            console.log(amt)
//     3. reduce() to calculate final account balance
            let acc = transac.reduce((balance, cur) => {
  if (cur.type === "credit") {
    return balance + cur.amount;
  } else {
    return balance - cur.amount;
  }
}, 0);

console.log(acc);
//     4. find() the first debit transaction
        let first = transac.find(x=>x.type==="debit")
        console.log(first)
//     5. findIndex() of transaction with amount 10000
        let tra = transac.findIndex(x=>x.amount===10000)
        console.log(tra)


