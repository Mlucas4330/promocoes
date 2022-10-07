const puppeteer = require('puppeteer');
const url = 'https://www.amazon.com.br/gp/goldbox/?_encoding=UTF8&pf_rd_p=6193cd06-34b5-4abe-b048-9dd86131ef96&pd_rd_wg=00U5h&pf_rd_r=XP0N70WRMH21Q764KS72&content-id=amzn1.sym.6193cd06-34b5-4abe-b048-9dd86131ef96&pd_rd_w=VYykQ&pd_rd_r=4dd99f04-8553-47b9-bf17-14415e0e7f7c&ref_=pd_gw_unk&deals-widget=%257B%2522version%2522%253A1%252C%2522viewIndex%2522%253A0%252C%2522presetId%2522%253A%2522BDDE77744305208C94F205619E35B298%2522%252C%2522discountRanges%2522%253A%255B%257B%2522sectionText%2522%253A%2522Desconto%2522%252C%2522optionText%2522%253A%2522%2520Descontos%2520a%2520partir%2520de%252050%2525%2522%252C%2522from%2522%253A50%252C%2522to%2522%253Anull%252C%2522selected%2522%253Atrue%257D%255D%252C%2522departments%2522%253A%255B%252216209062011%2522%252C%252216215417011%2522%252C%252216333486011%2522%255D%252C%2522dealType%2522%253A%2522BEST_DEAL%2522%252C%2522sorting%2522%253A%2522BY_SCORE%2522%252C%2522starRating%2522%253A4%257D';


(async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.waitForNavigation();
    await page.goto(url);

    let content = await page.evaluate(() => {
        return {
            nome_produto: page.$(".DealContent-module__truncate_sWbxETx42ZPStTc9jwySW").innerHTML,
            foto: page.$(".a-image-container.a-dynamic-image-container.aok-align-center-horizontally.DealImage-module__image_1aM-S1pMSsajamWgCRXa6y.DealImage-module__imageAspectRatioFix_DJdrM5BSpMhSiPB6czCA4 img").src,
            desconto: page.$(".BadgeAutomatedLabelApex-module__badgeAutomatedLabelApex_1VZO_dU1I6heEHsLmbRRWu.BadgeAutomatedLabelApex-module__light_2LF3B5hTU7wYCGMizFqBvg").innerHTML,
            preco_atual: page.$(".PriceBlock-module__dealsCustomPriceInteger_1NH_W-EQ_YsFll8adk-65e.PriceBlock-module__extraLarge_1QAaPWI74FWlz9FP0zwQ9t.PriceBlock-module__dealsCustomPriceIntegerApex_8381zvNhpWaDaiSJju3i0").innerHTML,
            preco_anterior: page.$(".a-price-whole").innerHTML,
            desconto_porcent: page.$(".a-size-small.a-color-secondary").innerText,
        }
    });
})();
  




