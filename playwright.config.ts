import { defineConfig, devices } from '@playwright/test';
import { configDotenv } from 'dotenv';


require ('dotenv').config();
export default defineConfig({
  testDir: './tests',

  retries: 2,

  workers: 4,
 
  reporter: 'html',
 
  use: {
   
    
    trace: 'on-first-retry',
    baseURL : 'https://www.sreenidhirajakrishnan.com',
    
  
  },


  projects: [
    
    {
  
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
    

   
  ],

  
});
