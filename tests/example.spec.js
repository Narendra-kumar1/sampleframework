// @ts-check
import {test,expect} from "../fixtures/login.js";

test('has title', async ({loginfixture}) => {

  console.log('test');
  await expect.soft(loginfixture.getByText("Logged In Successfully")).toBeVisible()

});

