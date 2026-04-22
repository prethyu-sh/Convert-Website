export default function sitemap() {
  const baseUrl = "https://your-project-name.vercel.app";

  const sizes = [20, 50, 100, 200];

  const urls = sizes.map((size) => ({
    url: `${baseUrl}/compress-image-to-${size}kb`,
    lastModified: new Date(),
  }));

  return urls;
}