import { getContents } from '@/app/view/utils'

export const baseUrl = `https://${process.env.CANONICAL_DOMAIN}$`;

export const dynamic = "force-static";

export default async function sitemap() {
  const contents = getContents().map((post) => ({
    url: `${baseUrl}/view/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ['', '/view'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...contents]
}
