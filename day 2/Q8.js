const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];



/*
1. Insert new Emp at 2nd position
2. Remove an emp with name "Kiran"
3.Change the last mark 95 to 75 of emp  "Sneha"
*/
//1
employees.splice(1,0,{
    eno: 1002,
    name: "teja",
    marks: [64, 71, 64],
  })
console.log(employees)
//2
employees.splice(4, 1)
console.log(employees)
//3

employees[3].marks[2] = 75
console.log(employees)