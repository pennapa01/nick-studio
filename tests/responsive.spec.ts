import { test, expect } from '@playwright/test';
for (const width of [320, 390, 768, 1440]) {
  test(`previews fit their cards at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      '/',
      '/templates/cafe/',
      '/templates/service/',
      '/templates/stay/',
      '/templates/florist/',
      '/templates/dashboard/',
    ]) {
      await page.goto(route);
      await page.locator('.mini-frame').first().waitFor();
      await page.evaluate(() => document.fonts.ready);
      const issues = await page.locator('.mini-frame').evaluateAll((frames) =>
        frames.flatMap((frame) => {
          const mini = frame.querySelector('.mini')!,
            bounds = mini.getBoundingClientRect(),
            problems: string[] = [];
          const footer = mini
            .querySelector('.mini-bottom')
            ?.getBoundingClientRect();
          for (const selector of [
            '.mini-nav',
            '.mini-body h3',
            '.mini-body p',
            '.mini-cta',
            '.dash-mini-kpis',
            '.dash-mini-graph',
            '.dash-mini-foot',
          ]) {
            const el = mini.querySelector(selector);
            if (!el) continue;
            const r = el.getBoundingClientRect();
            if (
              r.left < bounds.left - 1 ||
              r.right > bounds.right + 1 ||
              r.top < bounds.top - 1 ||
              r.bottom > bounds.bottom + 1
            )
              problems.push(`${selector} clipped`);
            if (
              footer &&
              selector.startsWith('.mini-body') &&
              r.bottom > footer.top + 1
            )
              problems.push(`${selector} overlaps footer`);
            if (el.scrollWidth > el.clientWidth + 1)
              problems.push(`${selector} text overflows horizontally`);
          }
          return problems;
        }),
      );
      expect(issues, `${route} at ${width}px`).toEqual([]);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        route,
      ).toBeTruthy();
    }
    if (width === 390) {
      await page.goto('/templates/cafe/');
      await page.screenshot({
        path: 'test-results/cafe-mobile.png',
        fullPage: true,
      });
      await page.goto('/');
      await page.locator('#templates').scrollIntoViewIfNeeded();
      await page.screenshot({ path: 'test-results/cards-mobile.png' });
    }
  });
}
