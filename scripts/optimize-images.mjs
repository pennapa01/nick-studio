import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const metadata = {};
for (const file of await fs.readdir('public')) {
  if (!file.endsWith('.jpg')) continue;
  const input = path.join('public', file),
    id = file.slice(0, -4),
    info = await sharp(input).metadata();
  metadata[id] = { width: info.width, height: info.height };
  await sharp(input).webp({ quality: 80 }).toFile(`public/${id}.webp`);
  for (const width of [480, 960, 1600])
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(`public/${id}-${width}.webp`);
}
await fs.writeFile(
  'data/images.json',
  JSON.stringify(metadata, null, 2) + '\n',
);
console.log(`Optimized ${Object.keys(metadata).length} images`);
