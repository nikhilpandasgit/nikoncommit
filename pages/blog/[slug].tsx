import Layout from '../../components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import Link from 'next/link';
import NextImage from 'next/image';


// Custom components for MDX
const components = {
  Image: (props: any) => (
    <div className="w-full max-w-5xl mx-auto my-6">
      <NextImage
        {...props}
        width={0} // Needed to bypass Next.js requirement
        height={0} // Same here
        sizes="100vw"
        style={{ width: '100%', height: 'auto', objectFit: 'contain', maxHeight: 600, }}
        className="rounded-2xl"
      />
    </div>
  ),
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-5 mb-2" {...props} />,
  p: (props: any) => <p className="mb-4" {...props} />,
  a: (props: any) => <a className="text-purple-400 hover:text-purple-300 transition" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-purple-400 pl-4 italic my-4" {...props} />
  ),
  code: (props: any) => (
    <code 
      className="bg-zinc-800 px-1 py-0.5 text-sm font-mono rounded-3xl" 
      {...props} 
    />
  ),
};

export default function PostPage({ frontmatter, mdxSource, prevPost, nextPost }: any) {
  return (
    <Layout title={`${frontmatter.title} | nikoncommit`}>
      <div className='max-w-5xl mx-auto'>
      <article className="mb-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
          
          {frontmatter.excerpt && (
            <p className="text-xl text-gray-400 mb-4">{frontmatter.excerpt}</p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="text-sm">{frontmatter.date}</span>
          {frontmatter.readingTime && (
            <span className="text-gray-500 text-sm">
              {frontmatter.readingTime} min read
            </span>
          )}
        </div>
        
        <div className="prose prose-invert max-w-5xl prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-lg">
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </article>
      
      {/* Post navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {prevPost ? (
          <Link href={`/blog/${prevPost.slug}`} className="flex-1">
            <div className="p-4 bg-zinc-900 hover:bg-zinc-800 transition rounded-3xl border border-zinc-800 h-full">
              <p className="text-sm text-gray-500 mb-2">Previous Post</p>
              <h4 className="font-semibold">{prevPost.frontmatter.title}</h4>
            </div>
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}
        
        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className="flex-1">
            <div className="p-4 bg-zinc-900 hover:bg-zinc-800 transition rounded-3xl border border-zinc-800 text-right h-full">
              <p className="text-sm text-gray-500 mb-2">Next Post</p>
              <h4 className="font-semibold">{nextPost.frontmatter.title}</h4>
            </div>
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}
      </div>
      </div>
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
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((filename) => {
    const postSlug = filename.replace('.mdx', '');
    const mdxSource = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontmatter } = matter(mdxSource);
    return {
      slug: postSlug,
      frontmatter,
    };
  });

  // Sort posts by date, newest first
  posts.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });

  // Find current post index
  const currentPostIndex = posts.findIndex((post) => post.slug === slug);
  
  // Get prev and next posts
  const prevPost = currentPostIndex < posts.length - 1 ? posts[currentPostIndex + 1] : null;
  const nextPost = currentPostIndex > 0 ? posts[currentPostIndex - 1] : null;

  // Get current post content
  const mdxSource = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8');
  const { data: frontmatter, content } = matter(mdxSource);
  const mdxCompiled = await serialize(content, { 
    mdxOptions: { 
      rehypePlugins: [rehypePrism]
    } 
  });

  return {
    props: { 
      frontmatter, 
      mdxSource: mdxCompiled,
      prevPost,
      nextPost
    },
  };
}
