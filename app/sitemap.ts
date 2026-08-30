import { getContents } from "@/app/view/utils";

export const baseUrl = `https://hiradekevin.github.io`;

export const dynamic = "force-static";

export default async function sitemap() {
  const routes = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
