import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'Full-Stack Developer Portfolio built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col justify-between antialiased">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-12 flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}