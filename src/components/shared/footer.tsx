import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          &copy; {year}{" "}
          <Link href="/" className="font-medium text-foreground hover:underline">
            NoCode
          </Link>
          . All rights reserved.
        </p>
        <p>Built for creators on the move.</p>
      </div>
    </footer>
  );
}
