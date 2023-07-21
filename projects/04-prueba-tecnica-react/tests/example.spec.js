// @ts-check
import { test, expect } from '@playwright/test'

const IMAGE_PREFIX_URL = 'https://cataas.com/'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // el getByRole recupera el elemento con ese estilo, al ser tan senzillo y solo haber uno podemos hacerlo asi
  // si no seria un getElementById de ese elemento
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(IMAGE_PREFIX_URL)).toBeTruthy()
});

//como hacer el test para el boton, usar variables