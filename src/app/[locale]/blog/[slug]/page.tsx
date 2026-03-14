import { getPost, getAllPosts } from "@/lib/blog";
import { Container } from "@/components/Container";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  const posts = getAllPosts(params.locale);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const post = await getPost(params.slug, params.locale);
  if (!post) return {};
  return {
    title: `${post.title} | D8labs Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const post = await getPost(params.slug, params.locale);
  if (!post) notFound();

  return (
    <Container>
      <div className="max-w-3xl mx-auto py-16 px-4">
        <Link
          href={`/${params.locale}/blog`}
          className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline mb-8 block"
        >
          ← Volver al Blog
        </Link>
        <time className="text-sm text-gray-400">{post.date}</time>
        <h1 className="text-4xl font-bold mt-2 mb-2 text-gray-900 dark:text-white leading-tight">
          {post.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10">Por {post.author}</p>
        <article
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </Container>
  );
}
