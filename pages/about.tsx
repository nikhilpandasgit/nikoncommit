import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="nikoncommit | About">
      <div className="prose prose-invert max-w-3xl">
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
        
        <h2>What I'm Currently Learning</h2>
        <ul>
          <li>Frontend Dev</li>
          <li>AI Concepts</li>
          <li>Systems design for scale</li>
        </ul>
        
        <h2>Tools & Technologies I Love</h2>
        <div className="flex flex-wrap gap-2 not-prose mb-8">
          <span className="px-3 py-1 bg-zinc-800 rounded-full">TypeScript</span>
          <span className="px-3 py-1 bg-zinc-800 rounded-full">React</span>
          <span className="px-3 py-1 bg-zinc-800 rounded-full">Next.js</span>
          <span className="px-3 py-1 bg-zinc-800 rounded-full">Node.js</span>
          <span className="px-3 py-1 bg-zinc-800 rounded-full">Tailwind CSS</span>
          <span className="px-3 py-1 bg-zinc-800 rounded-full">GraphQL</span>
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