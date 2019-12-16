const { Builder, By, Key, until } = require('selenium-webdriver');

require('selenium-webdriver/chrome');
require('chromedriver');


const rootURL = 'file:///C:/Users/aluno/Documents/aula-fernando/index.html';

const d = new Builder().forBrowser('chrome').build();
const waitUntilTime = 20000;

let driver;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;

async function getElementById(id) {
    const el = await driver.wait(until.elementLocated(By.id(id)), waitUntilTime)
    return await driver.wait(until.elementIsVisible(el), waitUntilTime)
  }

  async function getElementByXPath(xpath) {
    const el = await driver.wait(until.elementLocated(By.xpath(xpath)), waitUntilTime)
    return await driver.wait(until.elementIsVisible(el), waitUntilTime)
  };

  it('waits for the driver to start', () => {
    return d.then(_d => {
      driver = _d
    })
  });

  it('initialises the context', async () => {
    await driver.get(rootURL)
  });

  it('should fill a name input', async () => {

    await driver.findElement({ id: 'name'}).sendKeys('Notebook Dell');
    await driver.findElement({ id: 'code'}).sendKeys('100');

    let el = await getElementById('name');
    let actual = await el.value();

    let expected = 'Notebook Dell';
    expect(actual).toEqual(expected);
      
  });

