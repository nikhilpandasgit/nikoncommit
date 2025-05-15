import Layout from '../../components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { useState } from 'react';

export default function Blog({ posts, categories }: any) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter((post: any) => {
    const matchesSearch = post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.frontmatter.excerpt && post.frontmatter.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  return (
    <Layout title="nikoncommit | Blog">
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-400">
          Thoughts, learnings, and occasional rants about technology and programming.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex flex-col w-full md:w-96 md:text-end ml-auto space-y-4 mb-6">
          <input
            type="text"
            placeholder="Search posts..."
            className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post: any) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <div className="p-6 bg-zinc-900 hover:bg-zinc-800 transition rounded-xl border border-zinc-800 my-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-gray-500 text-sm">{post.frontmatter.date}</span>
                  {post.frontmatter.readingTime && (
                    <span className="text-gray-500 text-sm">
                      {post.frontmatter.readingTime} min read
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-semibold mb-3">{post.frontmatter.title}</h2>
                {post.frontmatter.excerpt && (
                  <p className="text-gray-400">{post.frontmatter.excerpt}</p>
                )}
              </div>
            </Link>
          ))
        ) : (
          <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-center">
            <p className="text-gray-400">No posts found matching your search</p>
          </div>
        )}
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

  // Sort posts by date, newest first
  posts.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });

  // Extract unique categories
  const categories = Array.from(
    new Set(
      posts
        .map((post: any) => post.frontmatter.category)
        .filter(Boolean)
    )
  );

  return { props: { posts, categories } };
}
