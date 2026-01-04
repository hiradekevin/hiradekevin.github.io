import { notFound } from "next/navigation";
import { MDXPage } from "@/components/mdx/mdx-components";
import { formatDate, getContents as getContents } from "@/app/view/utils";
import { baseUrl } from "@/app/sitemap";

export async function generateStaticParams() {
  const posts = getContents();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getContents().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/view/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function View({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getContents().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <MDXPage source={post.content} />
      </article>
    </section>
  );
}
