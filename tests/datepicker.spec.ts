import {test} from '@playwright/test'

test('datepickertest', async({page})=>{

const date1 = new Date()
const todaydate = date1.toISOString().split('T')[0];

console.log(todaydate);


//future date

const date2 = new Date()
date2.setDate(date2.getDate() + 10)
console.log(date2)

})
