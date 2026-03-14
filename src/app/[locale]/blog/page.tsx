import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Container } from "@/components/Container";

export default function BlogPage({ params }: { params: { locale: string } }) {
  const posts = getAllPosts(params.locale);

  return (
    <Container>
      <div className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Blog</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">
          Insights sobre IA, cobranza y el futuro del lending en LATAM.
        </p>
        {posts.length === 0 && (
          <p className="text-gray-500">No hay posts aún.</p>
        )}
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 dark:border-gray-700 pb-10">
              <time className="text-sm text-gray-400">{post.date}</time>
              <h2 className="text-2xl font-semibold mt-1 mb-2 text-gray-900 dark:text-white">
                <Link
                  href={`/${params.locale}/blog/${post.slug}`}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-3">{post.excerpt}</p>
              <Link
                href={`/${params.locale}/blog/${post.slug}`}
                className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline"
              >
                Leer más →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
