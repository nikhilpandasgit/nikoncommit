import Head from 'next/head';

export default function Layout({ children }: any) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <Head>
        <title>nikoncommit</title>
      </Head>
      <main className="max-w-4xl mx-auto">{children}</main>
    </div>
  );
}