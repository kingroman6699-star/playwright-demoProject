/*
import {test,expect} from '@playwright/test'

import  path from 'path'
//fileupload using filechooser

test('fileupload', async({page})=>{

     await page.goto('/practice')
    await page.getByRole('link', {name : 'Start practising'}).click()



const filechosing = page.waitForEvent('filechooser')
await page.getByTestId('file-upload').click()
const fileuploader = await filechosing
await fileuploader.setFiles('test-data/testfileupload.jpeg')
await expect(page.getByText('testfileupload.jpeg')).toBeVisible()
})



//download file

test('filedownlaod', async({page})=>{

const downloadfile = page.waitForEvent('download')

await page.getByTestId('download-btn').click()

const b = await downloadfile

await b.saveAs(path.join('test-data',b.suggestedFilename()))


expect(b.suggestedFilename()).toBe('practice.txt')

})
*/