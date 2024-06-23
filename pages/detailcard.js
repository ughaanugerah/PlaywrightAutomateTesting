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
}