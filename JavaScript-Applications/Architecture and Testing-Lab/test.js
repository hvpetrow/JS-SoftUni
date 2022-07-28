const { chromium } = require ('playwright');
const {expect} = require('chai');

let browser,page;

describe('E2E tests' , async function(){
    before(async () => {browser = await chromium.launch({headless:false, slowMo:3000 }); });
    after (async () => {await browser.close(); });
    beforeEach(async () => {page = await browser.newPage(); } );
    afterEach(async () => {await page.close(); });

    it('initial load',async ()=>{
        await page.goto('http://127.0.0.1:5501/01.%20Accordion/index.html');
        await page.waitForSelector('.accordion');

        const content = await page.textContent('#main');

        expect(content).to.contains('Open standard');
        expect(content).to.contains('Unix');
        expect(content).to.contains('ALGOL');       
    });

    it('More button works',async () => {
        await page.goto('http://127.0.0.1:5501/01.%20Accordion/index.html');
        await page.waitForSelector('.accordion');

        await page.click('text=More');

        await page.waitForResponse(/articles\/details/i);
        const visible = await page.isVisible('.accordion p');

        expect(visible).to.be.true;
    } );

    it('Less button works',async () => {
        await page.goto('http://127.0.0.1:5501/01.%20Accordion/index.html');
        await page.waitForSelector('.accordion');

        await page.click('text=More');

        await page.waitForResponse(/articles\/details/i);

        await page.waitForSelector('.accordion p',{ state: 'visible'});
        await page.click('text=Less');

        await page.waitForTimeout(60000);

        const visible = await page.isVisible('.accordion p');

        expect(visible).to.be.false;
    } );

    it('form input', async () => {

        await page.goto('http://127.0.0.1:5501/01.%20Accordion/index.html');

        await page.fill('[name="email"]','Peter');

        await page.waitForTimeout(60000);
    })
});
