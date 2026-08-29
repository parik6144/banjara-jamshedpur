import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outDir = path.join(root, "public", "images");
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(path.join(root, "app"), { recursive: true });

async function processLogo() {
  const input = path.join(root, "banjara logo.png");
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r < 32 && g < 32 && b < 32) {
      data[i + 3] = 0;
    }
  }

  const logoPath = path.join(outDir, "banjara-logo.png");
  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(logoPath);

  const emblemSize = Math.min(info.width, info.height);
  await sharp(logoPath)
    .extract({ left: 0, top: 0, width: emblemSize, height: emblemSize })
    .resize(256, 256)
    .png()
    .toFile(path.join(root, "app", "icon.png"));

  console.log("logo", info.width, info.height);
}

async function processPhoto(srcName, destName) {
  const src = path.join(root, "banjara images", srcName);
  const dest = path.join(outDir, destName);
  const meta = await sharp(src).rotate().metadata();
  await sharp(src)
    .rotate()
    .resize({
      width: 2400,
      height: 2400,
      fit: "inside",
      withoutEnlargement: true,
    })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dest);
  console.log(destName, meta.width, "x", meta.height);
}

await processLogo();

const photos = [
  ["banjara_front.JPG", "banjara-front.jpg"],
  ["SAT_7795.JPG", "sat-7795.jpg"],
  ["SAT_7806.JPG", "sat-7806.jpg"],
  ["SAT_7808.JPG", "sat-7808.jpg"],
  ["SAT_7809.JPG", "sat-7809.jpg"],
  ["SAT_7824.JPG", "sat-7824.jpg"],
  ["SAT_7827.JPG", "sat-7827.jpg"],
  ["SAT_7831.JPG", "sat-7831.jpg"],
];

for (const [src, dest] of photos) {
  await processPhoto(src, dest);
}

console.log("done");
