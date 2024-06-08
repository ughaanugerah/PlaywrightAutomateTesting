exports.LoginPage = class Login{
    constructor(page) {
        this.page = page
    }

    async LoginPage(){
        await this.page.goto('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');
        await this.page.getByLabel('Email', { exact: true }).fill('muhammadanugerahbasri@yahoo.com');
        await this.page.getByLabel('Password').fill('P@ssw0rd');
        await this.page.getByLabel('Password').press('Enter');
    }
}