import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const ROUTE_LABELS: Record<string, string> = {
  blog: 'Blog',
  about: 'About',
};

export default function Breadcrumb({ postTitle }: { postTitle?: string }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [displayPath, setDisplayPath] = useState(router.asPath);

  useEffect(() => {
    setMounted(true);
    setDisplayPath(router.asPath);
  }, []);

  useEffect(() => {
    const handleRouteChangeComplete = (url: string) => {
      setDisplayPath(url);
    };
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  if (!mounted) return null;

  const segments = displayPath.split('/').filter(Boolean);

  const crumbs =
    segments.length === 0
      ? []
      : [
          { label: 'Home', href: '/' },
          ...segments.map((seg, i) => {
            const href = '/' + segments.slice(0, i + 1).join('/');
            const label =
              ROUTE_LABELS[seg] ??
              (postTitle && i === segments.length - 1 ? postTitle : seg);
            return { label, href };
          }),
        ];

  return (
    <AnimatePresence mode="wait">
      {crumbs.length > 0 && (
        <motion.nav
          key={displayPath}
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-zinc-500 mb-6"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.2 }}
        >
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <span key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span className="text-zinc-700" aria-hidden="true">/</span>
                )}
                {isLast ? (
                  <span className="text-zinc-300 font-medium truncate max-w-[200px]">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-purple-400 transition-colors duration-200"
                    scroll={false}
                  >
                    {crumb.label}
                  </Link>
                )}
              </span>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}