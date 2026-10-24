import {test as base, expect} from "@playwright/test"


const test=base.extend({
    loginfixture:async({page},use)=>{
        console.log('setup');

        await page.goto(`${process.env.BASE_URL}`+/practice-test-login/);
        await page.getByLabel("Username").fill(`${process.env.USERNAME1}`);
        await page.getByLabel("Password").fill(`${process.env.PASSWORD}`);
        await page.getByRole("button",{name:"Submit"}).click();
        await use(page);

        console.log('teardown');

    }
})
 export {test,expect};