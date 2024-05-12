import { test, expect } from '@playwright/test';
import { RegisterPage } from ".././pages/register";
import exp from 'constants';

test('test', async ({ page }) => {
  const Register = new RegisterPage(page, expect)

  await Register.gotoRegisterURL()
  await Register.inputPersonalInformation()
  await Register.inputSigninInformation()
  await Register.verifyRegisterSuccess()

});