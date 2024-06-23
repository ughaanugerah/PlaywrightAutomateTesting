exports.NavbarPage = class Navbar {
    constructor(page) {
        this.page = page
    }
    async SelectMenu(Category, SubCategory, Menu){
        this.NavbarCategory = this.page.locator("//span[text()='" + Category + "']/parent::a[@role ='menuitem']")
        this.NavbarSubCategory = this.page.locator("//span[text()='" + Category + "']/parent::a[@role ='menuitem']/following-sibling::ul//span[text()='" + SubCategory + "']")
        this.NavbarMenu = this.page.locator("//span[text()='" + Category + "']/parent::a[@role ='menuitem']/following-sibling::ul//span[text()='" + Menu + "']")

        await this.NavbarCategory.hover();
        await this.NavbarSubCategory.hover();
        await this.NavbarMenu.click();
    }
}

exports.ItemCardpage = class ItemCard{
    constructor(page, expect) {
        this.page = page;
        this.expect = expect;
    }

    async ViewDetailCard(Item){
        await this.page.locator("//li[@class='item product product-item']//a[contains(text(), '" + Item + "')]").click();
    }

    async AddToCartFromCard(Item, Size, Color){
        await this.page.locator('li').filter({ hasText: Item }).getByLabel(Size).click();
        await this.page.locator('li').filter({ hasText: Item }).getByLabel(Color).click();
        await this.page.locator('li').filter({ hasText: Item }).locator('button').click();
        await this.expect(this.page.locator('form').filter({ hasText: 'Added' })).toBeVisible();
    }

}