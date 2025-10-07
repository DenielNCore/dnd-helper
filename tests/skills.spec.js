// Skills Tests

import { test, expect } from '@playwright/test';
import { MainPage } from './pages/MainPage.js';

test.describe('Skills Management', () => {
  let mainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.navigate();
  });

  test('should load Skills page correctly', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToSkills();
    
    // Wait for content to load
    await mainPage.page.waitForTimeout(1000);
    
    expect(await mainPage.isSkillsContentVisible()).toBeTruthy();
  });

  test('should display skills with proper information', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToSkills();
    
    // Wait for content to load
    await mainPage.page.waitForTimeout(1000);
    
    // Check if skills container is visible
    const skillsContainer = mainPage.page.locator('.skills-content, .skills-container, .skills-list');
    expect(await skillsContainer.isVisible()).toBeTruthy();
    
    // Check for individual skill items
    const skillItems = await mainPage.getSkillItems();
    const count = await skillItems.count();
    
    if (count > 0) {
      // Verify first skill has required information
      const firstSkill = await mainPage.getFirstSkillItem();
      const skillName = firstSkill.locator('h3, .name, .skill-name');
      expect(await skillName.isVisible()).toBeTruthy();
    }
  });

  test('should display skill modifiers', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToSkills();
    
    // Wait for content to load
    await mainPage.page.waitForTimeout(1000);
    
    // Look for skill modifiers
    const skillModifiers = mainPage.page.locator('.skill-modifier, .modifier, .bonus');
    const count = await skillModifiers.count();
    
    if (count > 0) {
      // Verify modifiers are displayed
      expect(await skillModifiers.first().isVisible()).toBeTruthy();
    }
  });

  test('should be responsive on different screen sizes', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToSkills();
    
    // Wait for content to load
    await mainPage.page.waitForTimeout(1000);
    
    // Test tablet size
    await mainPage.setViewportSize(768, 1024);
    await mainPage.page.waitForTimeout(500);
    expect(await mainPage.isSkillsContentVisible()).toBeTruthy();
    
    // Test mobile size
    await mainPage.setViewportSize(375, 667);
    await mainPage.page.waitForTimeout(500);
    expect(await mainPage.isSkillsContentVisible()).toBeTruthy();
  });

  test('should maintain skills state during navigation', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToSkills();
    await mainPage.page.waitForTimeout(1000);
    
    // Navigate away and back
    await mainPage.openBurgerMenu();
    await mainPage.navigateToAllSpells();
    await mainPage.page.waitForTimeout(1000);
    
    await mainPage.openBurgerMenu();
    await mainPage.navigateToSkills();
    await mainPage.page.waitForTimeout(1000);
    
    expect(await mainPage.isSkillsContentVisible()).toBeTruthy();
  });

  test('should handle skills data correctly', async () => {
    await mainPage.openBurgerMenu();
    await mainPage.navigateToSkills();
    
    // Wait for content to load
    await mainPage.page.waitForTimeout(1000);
    
    const skillItems = await mainPage.getSkillItems();
    const count = await skillItems.count();
    
    if (count > 0) {
      const firstSkill = await mainPage.getFirstSkillItem();
      
      // Check if skill has proper structure
      const skillText = await firstSkill.textContent();
      expect(skillText).toBeTruthy();
      expect(skillText.length).toBeGreaterThan(0);
    }
  });
});
