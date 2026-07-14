import {test} from '@playwright/test'

test('jsbasics',async({page})=>{


//highest number:
const num = [10,20,30,50,40]
const value1 = num.reduce(
    (a,b) => a>b? a :b)
console.log(value1)

//lowest numner
const num1 = [10,20,30,50,40]
const value2 = num1.reduce(
    (a,b) => b>a?a :b
)
console.log(value2)

//second largest number

const num3 = [10,20,30,50,40]
const value3 = [...num3].sort((a,b) => b-a)
console.log(value3[1])

//remove duplicates

const num4 = [10,20,30,50,40,50,40]
const value4 =[...new Set(num4)]

console.log(value4)

//largest even number

const number5 = [10,20,30,53,60,50,40]

const evenno1 = number5.filter(g => g % 2 == 0)
console.log("even numbers " + evenno1)
const evenno2 = evenno1.reduce(
    (a,b) => a >b? a :b
)
console.log(evenno2)



//3. Remove duplicate names and convert to uppercase
const users1 = ["krish", "john", "krish", "david"];

const removedup = [...new Set(users1)]

console.log(removedup)

const uppcase = removedup.map(a => a.toUpperCase())

console.log(uppcase)



})


