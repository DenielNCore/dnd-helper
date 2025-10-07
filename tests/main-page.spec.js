// Main Page Tests

import { test, expect } from '@playwright/test';
import { MainPage } from './pages/MainPage.js';

test.describe('Main Page', () => {
  let mainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.navigate();
  });

  test('should load main page correctly', async () => {
    const title = await mainPage.getPageTitle();
    expect(title).toBeTruthy();
    expect(title).toMatch(/DnD Helper|Vite/);
  });

  test('should toggle burger menu', async () => {
    // Initially menu should be closed
    expect(await mainPage.isSideMenuOpen()).toBeFalsy();

    // Open menu
    await mainPage.openBurgerMenu();
    expect(await mainPage.isSideMenuOpen()).toBeTruthy();

    // Close menu
    await mainPage.closeBurgerMenu();
    expect(await mainPage.isSideMenuOpen()).toBeFalsy();
  });

  test('should navigate to My Spells section', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToMySpells();
    
    // Wait for content to load
    await mainPage.page.waitForTimeout(1000);
    
    expect(await mainPage.isMySpellsContentVisible()).toBeTruthy();
  });

  test('should navigate to All Spells section', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToAllSpells();
    
    // Wait for content to load
    await mainPage.page.waitForTimeout(1000);
    
    expect(await mainPage.isAllSpellsContentVisible()).toBeTruthy();
  });

  test('should navigate to Skills section', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToSkills();
    
    // Wait for content to load
    await mainPage.page.waitForTimeout(1000);
    
    expect(await mainPage.isSkillsContentVisible()).toBeTruthy();
  });

  test('should maintain menu state during navigation', async () => {
    // Open menu and navigate
    await mainPage.openBurgerMenu();
    expect(await mainPage.isSideMenuOpen()).toBeTruthy();

    await mainPage.navigateToAllSpells();
    await mainPage.page.waitForTimeout(1000);

    // Menu should still be open
    expect(await mainPage.isSideMenuOpen()).toBeTruthy();

    // Close menu
    await mainPage.closeBurgerMenu();
    expect(await mainPage.isSideMenuOpen()).toBeFalsy();
  });
});
