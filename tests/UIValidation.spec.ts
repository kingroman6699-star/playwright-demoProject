import {test,expect} from '@playwright/test'
import path from 'path';

test('Second UI validation',async ({page})=>{

    await page.goto('/practice')
    await page.getByRole('link', {name : 'Start practising'}).click()

    //dropdown
    await page.locator('#standard-select').selectOption('Blue')
    await expect(page.getByTestId('standard-select-result')).toHaveText('Selected: blue')

    //multilevel dropdown
    await page.locator('#multi-select').selectOption('JavaScript')
    await expect(page.getByTestId('multi-select-result')).toHaveText('Selected: javascript')

    await page.getByTestId('custom-dropdown-toggle').click()
    await page.getByText('Alpha').click()
    await expect(page.getByTestId('custom-dropdown-result')).toHaveText('Selected: Alpha')
    
   //locators
   await page.getByPlaceholder('find by name attribute').fill('test')


   //dynamics content
   const disapperabtn = page.getByTestId('disappear-btn')
   await disapperabtn.click();
   await expect(disapperabtn).toBeHidden();

   await page.getByTestId('change-text-btn').click()
   await expect(page.getByText('Text has changed!')).toBeVisible()

   await page.getByTestId('load-content-btn').click()
   await expect(page.getByTestId('injected-list')).toBeVisible()

   //counter
   
   const counterlike = page.getByTestId('counter-result')
   const before = await counterlike.textContent()
   const initialvalue = Number(before?.match(/\d+/)?.[0])
   await page.getByTestId('increment-btn').click();
    const after = await counterlike.textContent()
   const finalvalue = Number(after?.match(/\d+/)?.[0])
   expect(finalvalue).toBe(initialvalue+1)

   //tables
   await page.getByPlaceholder('Filter by name').fill('Anita')
   expect(page.getByRole('row',{name:'Anita'})).toBeVisible()

    await page.getByPlaceholder('Filter by name').clear()
    await page.getByPlaceholder('Filter by name').fill('Harish')
   page.locator('#practice-table').filter({has: page.locator('tr').nth(1).getByText('Platform')})



//frames

const frameloc = page.frameLocator('iframe')

await frameloc.locator('#iframe-input').fill('test')

await frameloc.getByRole('button',{name : 'Submit'}).click()
await expect(frameloc.getByText('iframe button clicked:')).toBeVisible()

//drag and drop

const source =  page.locator('#drag-source')
const target = page.locator('#drop-zone')

await source.dragTo(target)
await expect(page.getByText('Item dropped successfully')).toBeVisible()


//hover
await page.locator('#hover-menu-trigger').hover()
await expect(page.getByText('Submenu item 1')).toBeVisible()


//multiple windows
const multiwindows = page.context().waitForEvent('page')

await page.getByTestId('open-window-btn').click()

const c = await multiwindows

await c.waitForLoadState()

await c.bringToFront()
await expect(page.getByText('New window/tab opened')).toBeVisible()


})

