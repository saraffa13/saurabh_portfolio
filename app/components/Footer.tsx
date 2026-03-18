export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} Saurabh. Built with Next.js &
          Tailwind.
        </p>
        <p className="text-sm text-zinc-400 dark:text-zinc-600">
          Designed & developed with care.
        </p>
      </div>
    </footer>
  );
}
