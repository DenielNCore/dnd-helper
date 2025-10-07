// Integration Tests

import { test, expect } from '@playwright/test';
import { MainPage } from './pages/MainPage.js';

test.describe('Application Integration', () => {
  let mainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.navigate();
  });

  test('should complete full user journey through all sections', async () => {
    // Start with All Spells
    await mainPage.openBurgerMenu();
    await mainPage.navigateToAllSpells();
    await mainPage.page.waitForTimeout(1000);
    expect(await mainPage.isAllSpellsContentVisible()).toBeTruthy();
    
    // Navigate to My Spells
    await mainPage.openBurgerMenu();
    await mainPage.navigateToMySpells();
    await mainPage.page.waitForTimeout(1000);
    expect(await mainPage.isMySpellsContentVisible()).toBeTruthy();
    
    // Navigate to Skills
    await mainPage.openBurgerMenu();
    await mainPage.navigateToSkills();
    await mainPage.page.waitForTimeout(1000);
    expect(await mainPage.isSkillsContentVisible()).toBeTruthy();
    
    // Return to All Spells
    await mainPage.openBurgerMenu();
    await mainPage.navigateToAllSpells();
    await mainPage.page.waitForTimeout(1000);
    expect(await mainPage.isAllSpellsContentVisible()).toBeTruthy();
  });

  test('should handle rapid navigation between sections', async () => {
    // Rapidly navigate between sections
    for (let i = 0; i < 3; i++) {
      await mainPage.openBurgerMenu();
      await mainPage.navigateToAllSpells();
      await mainPage.page.waitForTimeout(100);
      
      await mainPage.openBurgerMenu();
      await mainPage.navigateToMySpells();
      await mainPage.page.waitForTimeout(100);
      
      await mainPage.openBurgerMenu();
      await mainPage.navigateToSkills();
      await mainPage.page.waitForTimeout(100);
    }
    
    // Application should still be responsive
    expect(await mainPage.isSkillsContentVisible()).toBeTruthy();
  });

  test('should maintain application state during navigation', async () => {
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

  test('should handle page refresh correctly', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToSkills();
    await mainPage.page.waitForTimeout(1000);
    
    // Refresh page
    await mainPage.page.reload();
    await mainPage.page.waitForTimeout(1000);
    
    // Should still be able to navigate
    await mainPage.openBurgerMenu();
    await mainPage.navigateToAllSpells();
    await mainPage.page.waitForTimeout(1000);
    
    expect(await mainPage.isAllSpellsContentVisible()).toBeTruthy();
  });

  test('should work across different browsers', async ({ browserName }) => {
    // This test will run for each browser configured
    await mainPage.openBurgerMenu();
    await mainPage.navigateToAllSpells();
    await mainPage.page.waitForTimeout(1000);
    
    expect(await mainPage.isAllSpellsContentVisible()).toBeTruthy();
    
    // Test navigation
    await mainPage.openBurgerMenu();
    await mainPage.navigateToSkills();
    await mainPage.page.waitForTimeout(1000);
    
    expect(await mainPage.isSkillsContentVisible()).toBeTruthy();
  });

  test('should handle mobile navigation', async () => {
    // Set mobile viewport
    await mainPage.setViewportSize(375, 667);
    
    await mainPage.openBurgerMenu();
    await mainPage.navigateToAllSpells();
    await mainPage.page.waitForTimeout(1000);
    expect(await mainPage.isAllSpellsContentVisible()).toBeTruthy();
    
    await mainPage.openBurgerMenu();
    await mainPage.navigateToSkills();
    await mainPage.page.waitForTimeout(1000);
    expect(await mainPage.isSkillsContentVisible()).toBeTruthy();
  });

  test('should maintain performance during extended use', async () => {
    const startTime = Date.now();
    
    // Perform multiple navigation cycles
    for (let i = 0; i < 5; i++) {
      await mainPage.openBurgerMenu();
      await mainPage.navigateToAllSpells();
      await mainPage.page.waitForTimeout(200);
      
      await mainPage.openBurgerMenu();
      await mainPage.navigateToMySpells();
      await mainPage.page.waitForTimeout(200);
      
      await mainPage.openBurgerMenu();
      await mainPage.navigateToSkills();
      await mainPage.page.waitForTimeout(200);
    }
    
    const endTime = Date.now();
    const totalTime = endTime - startTime;
    
    // Should complete within reasonable time (10 seconds)
    expect(totalTime).toBeLessThan(10000);
    
    // Application should still be responsive
    expect(await mainPage.isSkillsContentVisible()).toBeTruthy();
  });
});
