import Layout from '../components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Home({ posts }: any) {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6">nikoncommit</h1>
      <p className="mb-8 text-gray-400">// code, thoughts & a bit of mild rebellion</p>
      <div className="space-y-4">
        {posts.map((post: any) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <div className="p-4 bg-zinc-900 hover:bg-zinc-800 transition rounded-xl">
              <h2 className="text-2xl font-semibold">{post.frontmatter.title}</h2>
              <p className="text-gray-500 text-sm">{post.frontmatter.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  ); 
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const mdxSource = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontmatter } = matter(mdxSource);
    return {
      slug,
      frontmatter,
    };
  });

  return { props: { posts } };
}