import { span } from 'framer-motion/client';
import Layout from '../components/Layout';
import { toolsLove, thingsWorking } from '../lib/constants';

export default function About() {

  const toolsILove: string[] = toolsLove;
  const thingsIamWorkingOn:string[] = thingsWorking;
  return (
    <Layout title="nikoncommit | About">
      <div className="prose prose-invert max-w-5xl mx-auto">
        <h1>About Me</h1>
        <div className="mb-8">
          <p>
            Hey there! I'm Nik, a software developer with a passion for building things that matter.
            I created this blog to document my journey, share what I learn, and connect with like-minded people.
          </p>

          <p>
            By day, I work on Web Development and Design. By night, I explore new technologies and occasionally write about my experiences here.
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