import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Analytics } from "@vercel/analytics/next"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

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
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <Component {...pageProps} routeKey={router.asPath}/>
          </motion.div>
      </div>
      <Analytics />
    </>
  );
}
