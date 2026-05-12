// One-shot favicon generation from the AYROMEX 512x512 source.
// Run with: node scripts/gen-favicons.mjs
//
// Inputs:  public/brand/logos/symbol/ayromex-favicon-source.png
// Outputs: public/favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png

import { readFile, writeFile } from 'node:fs/promises'
import sharp from 'sharp'
import pngToIco from 'png-to-ico'

const SRC = 'public/brand/logos/symbol/ayromex-favicon-source.png'

async function pngBuffer(size) {
  return sharp(SRC)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer()
}

async function main() {
  // ICO bundle (16, 32, 48 — standard browser favicon set).
  const ico = await pngToIco([
    await pngBuffer(16),
    await pngBuffer(32),
    await pngBuffer(48),
  ])
  await writeFile('public/favicon.ico', ico)

  await writeFile('public/apple-touch-icon.png', await pngBuffer(180))
  await writeFile('public/icon-192.png', await pngBuffer(192))
  await writeFile('public/icon-512.png', await pngBuffer(512))

  console.log('✓ favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png written.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
