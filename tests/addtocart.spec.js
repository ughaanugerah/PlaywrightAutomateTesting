import { test, expect } from '@playwright/test';
import { NavbarPage, ItemCardpage } from '../pages/mainpage';
import { DetailCardPage } from '../pages/detailcard';
import { LoginPage } from '../pages/login';

let Login;
let Navbar;
let Item;
let DetailCard;

test.beforeEach(async ({ page }) => {
    Login = new LoginPage(page);
    Navbar = new NavbarPage(page);
    Item = new ItemCardpage(page, expect);
    DetailCard = new DetailCardPage(page, expect);
    await Login.LoginPage();
  });

test('Add To Cart From Detail View', async ({ page }) => {
    await Navbar.SelectMenu("Men","Tops","Jackets");
    await Item.ViewDetailCard("Proteus Fitness Jackshirt");
    await DetailCard.SelectSizeColor("M","Blue")
});

test('Add To Cart From Detail View two', async ({ page }) => {
    await Navbar.SelectMenu("Woman","Bottoms","Pants");
    await Item.AddToCartFromCard("Emma Leggings","28","Blue")
});