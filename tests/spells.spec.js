// Spells Tests

import { test, expect } from '@playwright/test';
import { MainPage } from './pages/MainPage.js';

test.describe('Spells Management', () => {
  let mainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.navigate();
  });

  test('should display spell cards in All Spells section', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToAllSpells();
    
    // Wait for spells to load
    await mainPage.page.waitForTimeout(2000);
    
    const spellCards = await mainPage.getSpellCards();
    const count = await spellCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display spell information in cards', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToAllSpells();
    
    // Wait for spells to load
    await mainPage.page.waitForTimeout(2000);
    
    const firstSpellCard = await mainPage.getFirstSpellCard();
    if (await firstSpellCard.isVisible()) {
      // Check for spell name
      const spellName = firstSpellCard.locator('h3, .title, .spell-name');
      expect(await spellName.isVisible()).toBeTruthy();
      
      // Check for spell level
      const spellLevel = firstSpellCard.locator('.level, .spell-level');
      expect(await spellLevel.isVisible()).toBeTruthy();
    }
  });

  test('should navigate to My Spells section', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToMySpells();
    
    // Wait for content to load
    await mainPage.page.waitForTimeout(1000);
    
    expect(await mainPage.isMySpellsContentVisible()).toBeTruthy();
  });

  test('should search spells if search input is available', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToAllSpells();
    
    // Wait for spells to load
    await mainPage.page.waitForTimeout(2000);
    
    // Check if search input exists
    const searchInput = mainPage.page.locator('input[type="search"], input[placeholder*="search"], .search-input');
    if (await searchInput.isVisible()) {
      // Test search functionality
      await searchInput.fill('fire');
      await mainPage.page.waitForTimeout(1000);
      
      // Verify search results
      const searchResults = await mainPage.getSpellCards();
      const count = await searchResults.count();
      expect(count).toBeGreaterThan(0);
    }
  });

  test('should handle empty My Spells section', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToMySpells();
    
    // Wait for content to load
    await mainPage.page.waitForTimeout(1000);
    
    expect(await mainPage.isMySpellsContentVisible()).toBeTruthy();
    
    // Check if there's content or empty state
    const hasContent = await mainPage.page.locator('.my-spells-content, .empty-state, .add-spell').isVisible();
    expect(hasContent).toBeTruthy();
  });

  test('should display spell cards with proper styling', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToAllSpells();
    
    // Wait for spells to load
    await mainPage.page.waitForTimeout(2000);
    
    const firstSpellCard = await mainPage.getFirstSpellCard();
    if (await firstSpellCard.isVisible()) {
      // Check if card has proper styling
      const cardStyles = await firstSpellCard.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return {
          display: styles.display,
          padding: styles.padding,
          margin: styles.margin
        };
      });
      
      expect(cardStyles.display).not.toBe('none');
    }
  });
});
