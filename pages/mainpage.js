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
    constructor(page) {
        this.page = page
    }

    async SelectItem(Item){
        await this.page.locator("//li[@class='item product product-item']//a[contains(text(), '" + Item + "')]").click();
        await this.page.getByLabel('M', { exact: true }).click();
        await this.page.getByLabel('Blue').click();
        await this.page.getByRole('button', { name: 'Add to Cart' }).click();    
    }
}