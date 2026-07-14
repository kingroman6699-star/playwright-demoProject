import {Page, Locator} from '@playwright/test'

export class LoginPage{
readonly username : Locator;
readonly password : Locator;
readonly loginbtn : Locator

constructor(page : Page){
     this.username = page.getByPlaceholder('Username')
     this.password = page.getByPlaceholder('Password')
     this.loginbtn = page.getByRole('button',{name : 'Login'})
}

async userlogin(user : string,pass :string){
   await this.username.fill(user)
   await this.password.fill(pass)
}
async loginbtnclick(){
 await this.loginbtn.click()
}
}
