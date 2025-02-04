const puppeteer = require('puppeteer');
const express = require('express');

const app = express();
app.use(express.json());

async function loginToInstagram(page, username, password) {
  // Go to Instagram login page
  await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'domcontentloaded' });

  // Wait for the username and password input fields to load
  await page.waitForSelector('input[name="username"]');
  await page.waitForSelector('input[name="password"]');

  // Type username and password into the input fields
  await page.type('input[name="username"]', username);
  await page.type('input[name="password"]', password);

  // Click the login button
  await page.click('button[type="submit"]');

  // Wait for navigation (i.e., after successful login)
  await page.waitForNavigation({ waitUntil: 'domcontentloaded' });

  // Optionally: You can save the cookies here to reuse later (so you don't need to log in every time)
  const cookies = await page.cookies();
  return cookies;
}

async function scrapeInstagramPost(URL, username, password) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    // Login to Instagram
    const cookies = await loginToInstagram(page, username, password);
    console.log('Logged in successfully');

    // Use cookies to stay logged in for subsequent requests
    await page.setCookie(...cookies);

    // Go to the Instagram post URL
    await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });

    // Wait for the article section (or change the selector if needed)
    await page.waitForSelector('article');

    // Extract data (e.g., comments or likes)
    const data = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('span'));
      return elements.map(el => el.innerText);
    });

    return data;
  } catch (error) {
    console.error('Error scraping Instagram:', error);
    return [];
  } finally {
    await browser.close();
  }
}

app.post("/scrape-instagram", async (req, res) => {
  const { url, username, password } = req.body;

  if (!url || !username || !password) {
    return res.status(400).json({ error: "URL, username, and password are required" });
  }

  const result = await scrapeInstagramPost(url, username, password);
  res.status(200).json({ data: result });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
