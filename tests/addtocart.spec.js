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

test('Add To Cart Multiple Item From Detail View', async ({ page }) => {
    await Navbar.SelectMenu("Women","Tops","Tees");
    await Item.ViewDetailCard("Layla Tee");
    await DetailCard.SelectSizeColor("M","Green")
    await DetailCard.ValidateItemAddedMessage("Layla Tee")
    await Navbar.SelectMenu("Men","Bottoms","Shorts");
    await Item.ViewDetailCard("Rapha Sports Short");
    await DetailCard.SelectSizeColor("34","Purple");
    await DetailCard.ValidateItemAddedMessage("Rapha Sports Short")
});

test('Add To Cart From Card', async ({ page }) => {
    await Navbar.SelectMenu("Women","Bottoms","Pants");
    await Item.AddToCartFromCard("Emma Leggings","28","Blue")
});

test('Add To Cart Multiple Item From Card', async ({ page }) => {
    await Navbar.SelectMenu("Women","Bottoms","Pants");
    await Item.AddToCartFromCard("Emma Leggings","28","Blue")
    await Navbar.SelectMenu("Men","Tops","Tanks");
    await Item.AddToCartFromCard("Vulcan Weightlifting Tank","XS","Black")
});
