// Page Object for Main Page

import { testData, selectors } from '../fixtures/test-data.js';
import { waitForElement, clickElement, isElementVisible, waitForPageLoad } from '../utils/test-helpers.js';

export class MainPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to the main page
   */
  async navigate() {
    await this.page.goto(testData.urls.base);
    await waitForPageLoad(this.page);
  }

  /**
   * Open burger menu
   */
  async openBurgerMenu() {
    await clickElement(this.page, selectors.burgerButton);
  }

  /**
   * Close burger menu
   */
  async closeBurgerMenu() {
    if (await this.isSideMenuOpen()) {
      await clickElement(this.page, selectors.burgerButton);
    }
  }

  /**
   * Check if side menu is open
   * @returns {Promise<boolean>}
   */
  async isSideMenuOpen() {
    const menu = this.page.locator(selectors.sideMenu);
    const isVisible = await menu.isVisible();
    if (!isVisible) return false;
    
    // Check if menu has the 'is-open' class
    const hasOpenClass = await menu.evaluate(el => el.classList.contains('is-open'));
    return hasOpenClass;
  }

  /**
   * Navigate to My Spells section
   */
  async navigateToMySpells() {
    await clickElement(this.page, selectors.mySpellsTab);
  }

  /**
   * Navigate to All Spells section
   */
  async navigateToAllSpells() {
    await clickElement(this.page, selectors.allSpellsTab);
  }

  /**
   * Navigate to Skills section
   */
  async navigateToSkills() {
    await clickElement(this.page, selectors.skillsTab);
  }

  /**
   * Check if My Spells content is visible
   * @returns {Promise<boolean>}
   */
  async isMySpellsContentVisible() {
    return await isElementVisible(this.page, selectors.mySpellsContent);
  }

  /**
   * Check if All Spells content is visible
   * @returns {Promise<boolean>}
   */
  async isAllSpellsContentVisible() {
    return await isElementVisible(this.page, selectors.allSpellsContent);
  }

  /**
   * Check if Skills content is visible
   * @returns {Promise<boolean>}
   */
  async isSkillsContentVisible() {
    return await isElementVisible(this.page, selectors.skillsContent);
  }

  /**
   * Get page title
   * @returns {Promise<string>}
   */
  async getPageTitle() {
    return await this.page.title();
  }

  /**
   * Wait for page to load completely
   */
  async waitForPageLoad() {
    await waitForPageLoad(this.page);
  }

  /**
   * Get all spell cards
   * @returns {Promise<import('@playwright/test').Locator>}
   */
  async getSpellCards() {
    return this.page.locator(selectors.spellCard);
  }

  /**
   * Get first spell card
   * @returns {Promise<import('@playwright/test').Locator>}
   */
  async getFirstSpellCard() {
    return this.page.locator(selectors.spellCard).first();
  }

  /**
   * Search for spells
   * @param {string} searchTerm
   */
  async searchSpells(searchTerm) {
    const searchInput = this.page.locator(selectors.searchInput);
    if (await searchInput.isVisible()) {
      await searchInput.fill(searchTerm);
      await this.page.waitForTimeout(1000); // Wait for search results
    }
  }

  /**
   * Get skill items
   * @returns {Promise<import('@playwright/test').Locator>}
   */
  async getSkillItems() {
    return this.page.locator(selectors.skillItem);
  }

  /**
   * Get first skill item
   * @returns {Promise<import('@playwright/test').Locator>}
   */
  async getFirstSkillItem() {
    return this.page.locator(selectors.skillItem).first();
  }

  /**
   * Set viewport size
   * @param {number} width
   * @param {number} height
   */
  async setViewportSize(width, height) {
    await this.page.setViewportSize({ width, height });
  }
}
