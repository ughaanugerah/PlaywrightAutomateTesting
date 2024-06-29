exports.DetailCardPage = class DetailCard{
    constructor(page, expect) {
        this.page = page;
        this.expect = expect;
    }

    async SelectSizeColor(Size, Color){
        await this.page.getByLabel(Size, { exact: true }).click();
        await this.page.getByLabel(Color).click();
        await this.page.getByRole('button', { name: 'Add to Cart' }).click();
        await this.expect(this.page.getByRole('button', { name: 'Added' })).toBeVisible();  
    }

    async ValidateItemAddedMessage(itemName){
        await this.page.waitForSelector('div[data-ui-id="message-success"]', { visible: true });

        const messageText = await this.page.$eval('div[data-ui-id="message-success"] div', el => el.innerText);
        const expectedText = `You added ${itemName} to your shopping cart.`;

        this.expect(messageText.includes(expectedText)).toBe(true);
    }
}