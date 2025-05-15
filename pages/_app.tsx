import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Analytics } from "@vercel/analytics/next"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isIOS = typeof window !== 'undefined' && /iPhone|iPad|iPod/.test(navigator.userAgent);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favico/favicon.ico"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/favico/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favico/favicon-16x16.png" />
        <link rel="manifest" href="/favico/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.asPath}
            initial={isIOS ? false : { opacity: 0, y: -10 }}
            animate={isIOS ? {} : { opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
      <Analytics />
    </>
  );
}
