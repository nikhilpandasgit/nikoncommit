import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import GitHubIcon from "./icons/GithubIcon";
import XIcon from "./icons/XIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import { SITE_TITLE, NAME, LINKS, SOCIAL_LINKS } from '../lib/constants';
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: LINKS.HOME, label: "Home" },
  { href: LINKS.BLOG, label: "Blog" },
  { href: LINKS.ABOUT, label: "About" },
];

export default function Layout({ children, title = SITE_TITLE }: { children: React.ReactNode, title?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileNavVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Personal blog about code, thoughts & a bit of mild rebellion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Fixed the sticky header by adjusting the container structure */}
      <div style={{ transform: 'translateZ(0)'}} className="fixed top-0 z-50 w-full py-3 px-3">
        <header className="max-w-6xl mx-auto rounded-2xl shadow-xl border transition-all duration-300 border-zinc-800/60 bg-zinc-900/10 backdrop-blur-md">
          <motion.div
            className="p-4 px-6 flex justify-between items-center"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href="/" className="text-xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-400 transition duration-300">
                {SITE_TITLE}
              </span>
            </Link>

            <motion.button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.svg
                    key="close"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.nav className="hidden md:flex space-x-6 text-sm font-medium" variants={navVariants}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-white/80 hover:text-white group transition-colors duration-300"
                  >
                    {link.label}
                    <motion.span
                      className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
                      layoutId={`underline-${index}`}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                className="md:hidden px-6 pb-4"
                variants={mobileNavVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex flex-col space-y-4 text-sm font-medium">
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.href}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-white/80 hover:text-purple-400 transition pb-2 border-b border-white/5"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>
      </div>
      <div className="flex-grow w-full max-w-5xl mx-auto px-4">
        <motion.main
          className="flex-grow py-8 mt-16 transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {children}
        </motion.main>
      </div>

      <motion.footer
        className="mt-12 border-t border-zinc-800 bg-zinc-900/30 backdrop-blur-md shadow-inner w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto p-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-sm text-gray-400 mb-4 md:mb-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              Made with Love and a bit of Rebellion by {NAME} | {new Date().getFullYear()}
            </motion.p>
            <div className='flex space-x-4 mt-0'>
              {[
                { href: SOCIAL_LINKS.LINKEDIN, icon: <LinkedInIcon /> },
                { href: SOCIAL_LINKS.X, icon: <XIcon /> },
                { href: SOCIAL_LINKS.GITHUB, icon: <GitHubIcon /> }
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
