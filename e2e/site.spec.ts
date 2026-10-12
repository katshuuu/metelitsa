import { expect, test } from "@playwright/test";

test("homepage exposes the orchestra name and sections", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "Метелица" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Перейти к содержимому" })).toBeAttached();
  await expect(page.getByRole("heading", { name: "Ближайшие события" })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Сохраняя национальный код/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Наши партнеры" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Культура.РФ" })).toBeVisible();
  await expect(page.getByRole("img", { name: "Солистка оркестра «Метелица»" })).toBeVisible();
});

test("mobile menu opens and closes with Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Открыть меню" }).click();
  const dialog = page.getByRole("dialog", { name: "Меню" });
  await expect(dialog).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});

test("request form validates and then accepts a complete application", async ({ page }) => {
  await page.goto("/contacts");
  await page.getByRole("button", { name: "Отправить заявку" }).click();
  await expect(page.getByText("Укажите имя")).toBeVisible();
  await page.getByLabel("Имя").fill("Анна");
  await page.getByLabel("Организация").fill("Школа № 1");
  await page.getByLabel("Телефон или e-mail").fill("anna@example.com");
  await page.getByLabel("Сообщение").fill("Просим концерт для школьников в ноябре.");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Отправить заявку" }).click();
  await expect(page.getByRole("status")).toContainText("Заявка отправлена");
});

test("ticket filter and inner pages", async ({ page }) => {
  await page.goto("/tickets");
  await page.getByRole("button", { name: "Гастроли", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Гастроли по Южному федеральному округу" })).toBeVisible();
  await page.goto("/about");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Об оркестре");
  await page.goto("/contacts");
  await expect(page.getByText("+7 (812) 539-63-58").first()).toBeVisible();
});

test("video dialog and lightbox respond to the keyboard", async ({ page }) => {
  await page.goto("/media/video/v-cheshskix-lugax-i-lesax");
  await expect(page.locator("iframe").first()).toBeVisible();
  await page.goto("/");
  await page.getByRole("button", { name: /Париж/ }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
});

test("pages do not scroll sideways", async ({ page }) => {
  for (const width of [360, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ["/", "/about", "/tickets", "/contacts"]) {
      await page.goto(path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(1);
    }
  }
});
