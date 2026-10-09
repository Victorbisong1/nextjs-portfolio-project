import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12">
      <div className="space-y-6 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight whitespace-nowrap">
          Hello, I'm <span className="font-extrabold text-indigo-400"> Bisong Victor </span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          I build modern web applications with React, Next.js, TypeScript, and Tailwind CSS.
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="border border-slate-700 hover:border-slate-500 px-6 py-3 rounded-lg font-medium transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-xl">
        <Image
          src="/profile.png"
          alt="Profile Photo"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}