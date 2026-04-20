export default function sitemap() {
  const sizes = [20, 50, 100, 200, 300];

  const urls = sizes.map((size) => ({
    url: `http://localhost:3000/compress-image-to-${size}kb`,
    lastModified: new Date(),
  }));

  return urls;
}