import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px] shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/50 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
              <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 group-hover:text-white transition-colors">
                V
              </span>
            </div>
          </div>

          <span className="text-2xl md:text-3xl font-black tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            <span className="text-indigo-400">V</span>ICTOR
          </span>
        </Link>

        <div className="flex items-center space-x-3 md:space-x-4 text-base font-semibold">
          <Link href="/" className="px-5 py-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800/80 transition-all">
            Home
          </Link>

          <Link href="/about" className="px-5 py-2.5 rounded-xl text-slate-200 hover:text-indigo-400 hover:bg-slate-800/80 transition-all">
            About
          </Link>

          <Link href="/projects" className="px-5 py-2.5 rounded-xl text-slate-200 hover:text-indigo-400 hover:bg-slate-800/80 transition-all">
            Projects
          </Link>
          
          <Link href="/contact" className="px-5 py-2.5 rounded-xl text-slate-200 hover:text-indigo-400 hover:bg-slate-800/80 transition-all">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}