import {test,expect} from '@playwright/test'


test('verifying the UI validation', async ({page})=>{
   

    await page.goto('/practice')
    await page.getByRole('link', {name : 'Start practising'}).click()
    await page.getByPlaceholder('Enter your name').fill('testing')
    await page.getByPlaceholder('Enter password').fill('Test@123')
    await page.getByPlaceholder('Enter email').fill('test123@test.com')
    await page.getByPlaceholder('Enter phone').fill('9876543210')
    await page.getByPlaceholder('Tell us about yourself').fill('Automation test engineer')
    await page.getByTestId('form-submit').click()

    await expect(page.getByText('Form submitted successfully')).toBeEnabled();
   

    //single click
    await page.getByRole('button', {name : 'Single Click'}).click()
    await expect(page.getByText('Single clicked!')).toBeEnabled()

    //double click
    await page.getByRole('button', {name : 'Double Click'}).dblclick()
    await expect(page.getByText('Double clicked!')).toBeEnabled()
    
    //right click
    const rightClickbtn = page.getByTestId('right-click-btn')
    await expect(rightClickbtn).toBeVisible()
    await rightClickbtn.click({button : 'right'})
    await expect(page.getByText('Right click captured (context menu blocked)')).toBeVisible()

    //DELAY
    await page.getByTestId('start-delay-btn').click()
    await expect(page.getByTestId('delayed-enable-btn')).toBeEnabled()

    //Changing button text
    const changingText = page.getByTestId('relabel-btn')
    await changingText.click();
    await expect(changingText).toHaveText('Clicked Label')

    //CHECKBOX
    await page.getByLabel('Select All').check();
    const checboxvalue = page.getByLabel('Checkbox A')
    await expect(checboxvalue).toBeChecked()
 
    //Uncheck
    await page.getByLabel('Checkbox C').uncheck()
    await expect(page.getByLabel('Checkbox C')).not.toBeChecked()

    //radio button
    const radiobtn =  page.getByLabel('Radio Two')
    await radiobtn.check();
    expect(page.getByTestId('radio-result')).toHaveText('Selected: two')

    //reveal text
    await page.getByLabel('Reveal checkbox').click();
    await expect(page.getByText('Hidden text is now visible!')).toBeVisible()

    


}
)


