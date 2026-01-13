const { createWriteStream } = require("fs");
const { SitemapStream } = require("sitemap");

const BASE_URL = "https://sirine.me";
const OUTPUT_DIR = "dist/sirine-weslati/browser/sitemap.xml";
const LINKS = [
  { url: "/en", changefreq: "weekly", priority: 1.0 },
  { url: "/fa", changefreq: "weekly", priority: 1.0 },
];

const sitemap = new SitemapStream({ hostname: BASE_URL });
const writeStream = createWriteStream(OUTPUT_DIR);
sitemap.pipe(writeStream);
LINKS.forEach((link) => sitemap.write(link));
sitemap.end();
