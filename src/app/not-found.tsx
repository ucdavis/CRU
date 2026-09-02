import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-20 text-center">
      <p className="mb-3 text-sm font-medium uppercase text-light-font/75">
        Error 404
      </p>
      <h1 className="mb-4">Page not found</h1>
      <p className="mx-auto mb-8 max-w-xl text-lg">
        The page you requested may have moved, been renamed, or no longer be available.
      </p>
      <div className="flex flex-col justify-center gap-3 sm:flex-row">
        <Link className="btn btn-primary btn-lg" href="/">
          Go home
        </Link>
        <Link className="btn btn-outline btn-lg" href="/documentation">
          Browse documentation
        </Link>
      </div>
    </div>
  );
}
