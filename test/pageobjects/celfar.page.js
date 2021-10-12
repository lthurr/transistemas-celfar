const Page = require('./page');

class CelFarPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title () { return $('h1') }
    get description () { return $('#description') }
    get input () { return $('#input') }
    get btnSubmit () { return $('input[type="submit"]') }
    get output () { return $('#output') }

    /**
     * a method to encapsule automation code to interact with the page
     */
    async getLinksInDescription (input) {
        return this.description.$$('a').map((elem) => elem.getAttribute('href'));
    }

    async getLinksInOutput (input) {
        return this.output.$$('a').map((elem) => elem.getAttribute('href'));
    }

    async convert (input) {
        await this.input.setValue(input);
        await this.btnSubmit.click();
    }

}

module.exports = new CelFarPage();
