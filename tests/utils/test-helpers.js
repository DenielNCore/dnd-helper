// Test helper utilities

/**
 * Wait for element to be visible
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 * @param {number} timeout
 */
export async function waitForElement(page, selector, timeout = 5000) {
  await page.waitForSelector(selector, { timeout });
}

/**
 * Wait for element to be hidden
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 * @param {number} timeout
 */
export async function waitForElementHidden(page, selector, timeout = 5000) {
  await page.waitForSelector(selector, { state: 'hidden', timeout });
}

/**
 * Click element and wait for it to be visible first
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 * @param {number} timeout
 */
export async function clickElement(page, selector, timeout = 5000) {
  await waitForElement(page, selector, timeout);
  await page.click(selector);
}

/**
 * Fill input field
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 * @param {string} value
 * @param {number} timeout
 */
export async function fillInput(page, selector, value, timeout = 5000) {
  await waitForElement(page, selector, timeout);
  await page.fill(selector, value);
}

/**
 * Get text content of element
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 * @param {number} timeout
 * @returns {Promise<string>}
 */
export async function getText(page, selector, timeout = 5000) {
  await waitForElement(page, selector, timeout);
  return await page.textContent(selector);
}

/**
 * Check if element is visible
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 * @returns {Promise<boolean>}
 */
export async function isElementVisible(page, selector) {
  return await page.isVisible(selector);
}

/**
 * Take screenshot with timestamp
 * @param {import('@playwright/test').Page} page
 * @param {string} name
 * @returns {Promise<string>}
 */
export async function takeScreenshot(page, name) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `screenshot-${name}-${timestamp}.png`;
  await page.screenshot({ path: `test-results/screenshots/${filename}` });
  return filename;
}

/**
 * Wait for page to be fully loaded
 * @param {import('@playwright/test').Page} page
 */
export async function waitForPageLoad(page) {
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');
}

/**
 * Navigate to URL and wait for load
 * @param {import('@playwright/test').Page} page
 * @param {string} url
 */
export async function navigateToUrl(page, url) {
  await page.goto(url);
  await waitForPageLoad(page);
}

/**
 * Set viewport size
 * @param {import('@playwright/test').Page} page
 * @param {number} width
 * @param {number} height
 */
export async function setViewportSize(page, width, height) {
  await page.setViewportSize({ width, height });
}

/**
 * Wait for specific amount of time
 * @param {number} ms
 */
export async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generate random string
 * @param {number} length
 * @returns {string}
 */
export function generateRandomString(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Format date for test naming
 * @returns {string}
 */
export function getTimestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}
