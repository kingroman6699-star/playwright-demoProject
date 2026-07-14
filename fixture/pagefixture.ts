import {test as base} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

export type testoption = {
  loginPage : LoginPage;
}

export const test = base.extend<testoption>({

 loginPage: async ({page},use)=>{
    await use(new LoginPage(page))


 }

})