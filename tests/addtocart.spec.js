import { test, expect } from '@playwright/test';
import { NavbarPage, ItemCardpage } from '../pages/mainpage';
import { LoginPage } from '../pages/login';

test('test', async ({ page }) => {

    const Login = new LoginPage(page);
    const Navbar = new NavbarPage(page);
    const Item = new ItemCardpage(page);

    await Login.LoginPage();
    await Navbar.SelectMenu("Men","Tops","Jackets");
    await Item.SelectItem("Proteus Fitness Jackshirt")
    
    await page.getByRole('link', { name: ' My Cart 1 1 items' }).click();
    await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    await page.getByRole('link', { name: 'Continue Shopping' }).click();
});