const { chromium } = require("playwright-chromium");
const { expect } = require("chai");

const mockData = {
  "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
    author: "J.K.Rowling",
    title: "Harry Potter and the Philosopher's Stone",
  },
  "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
    author: "Svetlin Nakov",
    title: "C# Fundamentals",
  },
};

function json(data) {
    return {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
}

let page, browser;

describe("Tests", async function () {
  this.timeout(50000);

  before(async () => {
    browser = await chromium.launch({ headless: false, slowMo: 2000 });
  });

  after(async () => {
    await browser.close();
  });
  beforeEach(async () => {
    page = await browser.newPage();
  });
  afterEach(async () => {
    await page.close();
  });

  it("loads and displays all books", async () => {
    await page.route("**/jsonstore/collections/books*", (route, request) => {
      route.fulfill(json(mockData));
    });
    await page.goto("http://localhost:5500");
    await page.click("text=Load All Books");

    await page.waitForSelector("text=Harry Potter");

    const rows = await page.$$eval("tr", (rows) =>
      rows.map((r) => r.textContent.trim())
    );

    expect(rows[1]).to.contains("Harry Potter");
    expect(rows[1]).to.contains("Rowling");
    expect(rows[2]).to.contains("C# Fundamentals");
    expect(rows[2]).to.contains("Nakov");
  });
});
