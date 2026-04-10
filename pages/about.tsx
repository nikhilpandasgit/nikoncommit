import { span } from 'framer-motion/client';
import Layout from '../components/Layout';
import { toolsLove, thingsWorking } from '../lib/constants';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
  })
  const toolsILove: string[] = toolsLove;
  const thingsIamWorkingOn:string[] = thingsWorking;
  return (
    <Layout title="nikoncommit | About">
      <div className="prose prose-invert max-w-5xl mx-auto">
        <h1>About Me</h1>
        <div className="mb-8">
          <p>
            Hey, I'm Nikhil Panda. I build systems more than just apps—things that think, adapt, and don’t break easily under pressure. 
            This blog is where I document what I’m building, breaking, and learning along the way.
          </p>
          <p>
            Lately, I’ve been deep into distributed systems, Kubernetes, backend architecture, and graph + NLP-driven ideas like Threadbrain. 
            I enjoy figuring out how complex systems behave and making them simpler to work with.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">What I'm Currently Learning</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {thingsIamWorkingOn.map((thing, i) => {
            return(
              <li key={i}>{thing}</li>
            )
          })}
        </ul>

        <h2 className="text-2xl font-bold mb-4">Tools & Technologies I Love</h2>
        <div className="flex flex-wrap gap-2 not-prose mb-8">
          {toolsILove.map((tool, i) => {
            return(
            <span key={i} 
            className='px-3 py-1 bg-zinc-800 rounded-full transition-all duration-200 hover:scale-105 hover:bg-zinc-700 hover:shadow-md hover:shadow-zinc-500/10 cursor-pointer'>
              {tool}
            </span>)
          })}
        </div>


        <h2>Let's Connect</h2>
        <p>
          I'm always open to interesting conversations and collaborations.
          Feel free to reach out to me on Twitter or GitHub, or drop me an email at <a href="mailto:nikhil.panda.devs@gmail.com">nikhil.panda.devs@gmail.com</a>.
        </p>
      </div>
    </Layout>
  );
}