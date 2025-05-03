import Layout from '../../components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import 'prism-themes/themes/prism-vsc-dark-plus.css';

export default function PostPage({ frontmatter, mdxSource }: any) {
  return (
    <Layout>
      <article className="prose prose-invert max-w-3xl">
        <h1>{frontmatter.title}</h1>
        <p className="text-sm text-gray-500">{frontmatter.date}</p>
        <MDXRemote {...mdxSource} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.mdx', '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }: any) {
  const mdxSource = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8');
  const { data: frontmatter, content } = matter(mdxSource);
  const mdxCompiled = await serialize(content, { mdxOptions: { rehypePlugins: [rehypePrism] } });
  return {
    props: { frontmatter, mdxSource: mdxCompiled },
  };
}