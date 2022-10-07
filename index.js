const puppeteer = require('puppeteer');
const url = 'https://instagram.com/accounts/login';
const username = '';
const senha = '';

(async () => {
    const browser = await puppeteer.launch({ 
        headless: false 
    });
    const page = await browser.newPage();
    await page.goto(url);

    await page.waitForSelector("input[name='username']");

    const username_input = await page.$("input[name='username']");
    const password_input = await page.$("input[name='password']");
    const submit_input = await page.$("button[type='submit']");

    await username_input.click();
    await page.keyboard.type(username, { delay: 50 });

    await password_input.click();
    await page.keyboard.type(senha, { delay: 50 });
 
    await submit_input.click();

    await page.waitForSelector("._a9--._a9_1");
    const button_noty = await page.$("._a9--._a9_1");
    await button_noty.click();
  

    const button_post = await page.$("._abl-._abm2");
    await button_post.click();

    const upload_file = await page.$("input[type='file']");
    await upload_file.uploadFile('mountain-landscape-hiking-trail-view-260nw-1071252569.png');

    await page.waitForNavigation();

})();