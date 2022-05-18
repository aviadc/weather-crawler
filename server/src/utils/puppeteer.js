const puppeteer = require('puppeteer');

const getWeatherData = async (searchVal) => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    args: ['--no-sandbox', '--disable-setuid-sandbox',"--single-process",
    "--no-zygote"], 
  });
  const page = await browser.newPage();
  await page.goto('https://www.timeanddate.com/weather/');
  await page.waitForTimeout(100);
  await page.type('input[type="search"]', searchVal);
  await page.waitForTimeout(1500);
  await page.click('#po1 > div > ul > li:nth-child(1)');
  await page.waitForTimeout(500);
  const data = await page.evaluate(() => {
    const weatherData = {};
    [...document.querySelector('.bk-focus__info tbody').childNodes].forEach((item) => {
      const key = item.firstChild.textContent.slice(0,-2);
      const value = item.lastChild.textContent;
      weatherData[key] = value;
    });
    weatherData['imgUrl'] = document.querySelector('#cur-weather').src;
    weatherData['temperature'] = document.querySelector('.h2').textContent;
    weatherData['moreDetails'] = document.querySelector('#qlook').lastChild.textContent;
    return weatherData;    
  });
  browser.close();
  return data;
}

module.exports = getWeatherData;