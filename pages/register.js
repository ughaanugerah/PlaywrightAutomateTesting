exports.RegisterPage = class RegisterPage {

    constructor(page, expect) {
        this.randomNumber = 'Code' + Math.round((Math.random()*1000))

        this.page = page
        this.expect = expect

        this.input_FirstName = page.getByLabel('First Name')
        this.input_LastName = page.getByLabel('Last Name')
        this.input_Email = page.getByLabel('Email', { exact: true })
        this.input_Password = page.getByRole('textbox', { name: 'Password*', exact: true })
        this.input_ConfirmPassword = page.getByLabel('Confirm Password')
        this.button_CreateAccount = page.getByRole('button', { name: 'Create an Account' })
    }

    async gotoRegisterURL() {
        await this.page.goto('/');
        await this.page.getByRole('link', { name: 'Create an Account' }).click();
        await this.expect(this.page).toHaveURL('https://magento.softwaretestingboard.com/customer/account/create/')
    }


    async inputPersonalInformation() {
        await this.input_FirstName.fill('Testing')
        await this.input_LastName.fill('Automate ' + this.randomNumber)
    }

    async inputSigninInformation() {
        await this.input_Email.fill('automateemail'+ this.randomNumber + '@yopmail.com')
        await this.input_Password.fill('P@ssw0rd')
        await this.input_ConfirmPassword.fill('P@ssw0rd')
        await this.button_CreateAccount.click();
    }

    async verifyRegisterSuccess(){
        await this.expect(this.page).toHaveURL('https://magento.softwaretestingboard.com/customer/account/')
        await this.expect(this.page.getByText('Thank you for registering')).toBeVisible();      
    }

}