export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a
          href="#"
          className="font-serif text-lg font-bold text-zinc-900 dark:text-white"
        >
          Saurabh<span className="text-violet-500">.</span>
        </a>
        <p className="text-sm text-zinc-400 dark:text-zinc-600">
          &copy; {new Date().getFullYear()} Saurabh Kumar Jaiswal. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
