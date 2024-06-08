import { test, expect } from '@playwright/test';
import { RegisterPage } from ".././pages/register";

test('test', async ({ page }) => {
  const Register = new RegisterPage(page, expect)

  await Register.gotoRegisterURL()
  await Register.inputPersonalInformation()
  await Register.inputSigninInformation()
  await Register.verifyRegisterSuccess()

});