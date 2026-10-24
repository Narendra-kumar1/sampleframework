// @ts-check
import {test,expect} from "../fixtures/login.js";

test('has title', async ({loginfixture}) => {

  console.log('test');
  console.log("reset2")
  await expect.soft(loginfixture.getByText("Logged In Successfully")).toBeVisible()

});

