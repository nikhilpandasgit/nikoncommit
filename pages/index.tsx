import Layout from '../components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { useState } from 'react';
import StatusBadge  from '../components/StatusBadge';
import { currentProjects } from '../lib/constants';

interface Project {
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned' | 'paused' | 'abandoned';
  technologies: string[];
}


export default function Home({ posts }: any) {
  const [searchTerm, setSearchTerm] = useState('');
  const projects: Project[] = currentProjects;

  const filteredPosts = posts.filter((post: any) =>
    post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (post.frontmatter.excerpt && post.frontmatter.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout title="nikoncommit | Home">
      <section className="mb-12">
        <p className="text-lg text-gray-400 mb-6">// code, thoughts & a bit of mild rebellion</p>
        <p className="text-gray-300">
          Welcome to my digital garden where I document my coding adventures,
          share my thoughts on tech, and occasionally rebel against my comfortable self.
        </p>
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Recent Posts</h2>
          <Link href="/blog" className="text-purple-400 hover:text-purple-300 transition">
            View all →
          </Link>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full p-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.slice(0, 4).map((post: any) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <div className="p-6 bg-zinc-900 hover:bg-zinc-800 transition rounded-xl border border-zinc-800 h-full">
                  <div className="flex items-center mb-2">
                    <span className="bg-purple-500 w-2 h-2 rounded-full mr-2"></span>
                    <p className="text-gray-500 text-sm">{post.frontmatter.date}</p>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.frontmatter.title}</h3>
                  {post.frontmatter.excerpt && (
                    <p className="text-gray-400 text-sm line-clamp-3">{post.frontmatter.excerpt}</p>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-2 p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-center">
              <p className="text-gray-400">No posts found matching your search</p>
            </div>
          )}
        </div>
      </section>

      <section>
      <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 relative">
            <div className="absolute top-4 right-4">
              <StatusBadge status={project.status} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-xs px-2 py-1 bg-zinc-800 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

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

  return { props: { posts } };
}